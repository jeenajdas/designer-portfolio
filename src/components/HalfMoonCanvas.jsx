import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function ShaderPlane({ hue = 280, hoverIntensity = 0.5, rotateOnHover = true }) {
  const meshRef = useRef();
  const uniformsRef = useRef({
    iTime: { value: 0 },
    iResolution: { value: new THREE.Vector3(512, 512, 1) },
    hue: { value: hue },
    hover: { value: 0 },
    rot: { value: 0 },
    hoverIntensity: { value: hoverIntensity }
  });

  const targetHover = useRef(0);
  const currentHover = useRef(0);
  const currentRot = useRef(0);
  const time = useRef(0);

  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const fragmentShader = `
    precision highp float;
    uniform float iTime;
    uniform vec3 iResolution;
    uniform float hue;
    uniform float hover;
    uniform float rot;
    uniform float hoverIntensity;
    varying vec2 vUv;

    vec3 rgb2yiq(vec3 c) {
      float y = dot(c, vec3(0.299,0.587,0.114));
      float i = dot(c, vec3(0.596,-0.274,-0.322));
      float q = dot(c, vec3(0.211,-0.523,0.312));
      return vec3(y,i,q);
    }
    vec3 yiq2rgb(vec3 c) {
      float r = c.x + 0.956*c.y + 0.621*c.z;
      float g = c.x - 0.272*c.y - 0.647*c.z;
      float b = c.x - 1.106*c.y + 1.703*c.z;
      return vec3(r,g,b);
    }
    vec3 adjustHue(vec3 color, float hueDeg) {
      float hueRad = hueDeg * 3.14159265 / 180.0;
      vec3 yiq = rgb2yiq(color);
      float cosA = cos(hueRad);
      float sinA = sin(hueRad);
      float i = yiq.y * cosA - yiq.z * sinA;
      float q = yiq.y * sinA + yiq.z * cosA;
      yiq.y = i;
      yiq.z = q;
      return yiq2rgb(yiq);
    }

    float subtleNoise(vec2 p) {
      return 0.5 + 0.5 * sin(5.0 * p.x + 0.7 * p.y + iTime * 0.5);
    }

    const vec3 baseColor1 = vec3(0.611765, 0.262745, 0.996078);
    const vec3 baseColor2 = vec3(0.298039, 0.760784, 0.913725);
    const vec3 baseColor3 = vec3(0.062745, 0.078431, 0.600000);
    const float innerRadius = 0.6;

    float light1(float intensity, float attenuation, float dist) {
      return intensity / (1.0 + dist * attenuation);
    }
    float light2(float intensity, float attenuation, float dist) {
      return intensity / (1.0 + dist * dist * attenuation);
    }

    vec4 draw(vec2 uv) {
      vec3 color1 = adjustHue(baseColor1, hue);
      vec3 color2 = adjustHue(baseColor2, hue);
      vec3 color3 = adjustHue(baseColor3, hue);

      float ang = atan(uv.y, uv.x);
      float len = length(uv);
      float invLen = len > 0.0 ? 1.0 / len : 0.0;

      float n0 = subtleNoise(uv * 0.65) * 0.5 + 0.5;
      float r0 = mix(mix(innerRadius, 1.0, 0.4), mix(innerRadius, 1.0, 0.6), n0);
      float d0 = distance(uv, (r0 * invLen) * uv);
      float v0 = light1(1.0, 10.0, d0);
      v0 *= smoothstep(r0 * 1.05, r0, len);
      float cl = cos(ang + iTime * 2.0) * 0.5 + 0.5;

      float a = iTime * -1.0;
      vec2 pos = vec2(cos(a + rot), sin(a + rot)) * r0;
      float d = distance(uv, pos);
      float v1 = light2(1.5, 5.0, d);
      v1 *= light1(1.0, 50.0, d0);

      float v2 = smoothstep(1.0, mix(innerRadius, 1.0, n0 * 0.5), len);
      float v3 = smoothstep(innerRadius, mix(innerRadius, 1.0, 0.5), len);

      vec3 col = mix(color1, color2, cl);
      col = mix(color3, col, v0);
      col = (col + v1) * v2 * v3;
      col = clamp(col, 0.0, 1.0);

      return vec4(col, max(max(col.r, col.g), col.b));
    }

    vec4 mainImage(vec2 fragCoord) {
      vec2 center = iResolution.xy * 0.5;
      float size = min(iResolution.x, iResolution.y);
      vec2 uv = (fragCoord - center) / size * 2.0;

      float angle = rot;
      float s = sin(angle);
      float c = cos(angle);
      uv = vec2(c * uv.x - s * uv.y, s * uv.x + c * uv.y);

      uv.x += hover * hoverIntensity * 0.08 * sin(uv.y * 10.0 + iTime);
      uv.y += hover * hoverIntensity * 0.08 * sin(uv.x * 10.0 + iTime);

      return draw(uv);
    }

    void main() {
      vec2 fragCoord = vUv * iResolution.xy;
      vec4 col = mainImage(fragCoord);
      float maskY = step(0.5, vUv.y);
      float bottomMask = 1.0 - maskY;
      col.a *= bottomMask;
      gl_FragColor = vec4(col.rgb * col.a, col.a);
    }
  `;

  useEffect(() => {
    const u = uniformsRef.current;
    u.iResolution.value.set(800, 400, 1);
  }, []);

  useFrame((state, delta) => {
    time.current += delta;
    const u = uniformsRef.current;
    u.iTime.value = time.current;
    currentHover.current += (targetHover.current - currentHover.current) * 0.08;
    u.hover.value = currentHover.current;
    if (rotateOnHover) {
      if (currentHover.current > 0.05) currentRot.current += delta * 0.6;
      u.rot.value = currentRot.current;
    } else {
      u.rot.value = currentRot.current + time.current * 0.05;
    }
    if (meshRef.current && meshRef.current.material) {
      meshRef.current.material.uniforms = u;
    }
  });

  useEffect(() => {
    const canvasEl = document.querySelector(".halfmoon-canvas");
    if (!canvasEl) return;

    function onMove(e) {
      const rect = canvasEl.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const dist = Math.hypot(x - cx, y - cy);
      const maxDist = Math.min(rect.width, rect.height) * 0.45;
      targetHover.current = dist < maxDist ? 1 : 0;
    }

    function leave() {
      targetHover.current = 0;
    }

    canvasEl.addEventListener("mousemove", onMove);
    canvasEl.addEventListener("mouseleave", leave);
    window.addEventListener("resize", () => {
      const r = canvasEl.getBoundingClientRect();
      uniformsRef.current.iResolution.value.set(r.width, r.height, 1);
    });

    const r = canvasEl.getBoundingClientRect();
    if (r.width && r.height) uniformsRef.current.iResolution.value.set(r.width, r.height, 1);

    return () => {
      canvasEl.removeEventListener("mousemove", onMove);
      canvasEl.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <mesh ref={meshRef}>
      {/* ✅ FIXED HERE */}
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        transparent={true}
        uniforms={uniformsRef.current}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        depthWrite={false}
      />
    </mesh>
  );
}

export default function HalfMoonCanvas(props) {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        className="halfmoon-canvas"
        orthographic={false}
        dpr={Math.min(window.devicePixelRatio, 1.5)}
        camera={{ position: [0, 0, 1], fov: 50 }}
      >
        <ambientLight intensity={0.0} />
        <ShaderPlane {...props} />
      </Canvas>
    </div>
  );
}
