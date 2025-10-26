// src/components/ArcCanvas.jsx
import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// 🌀 Custom Arc Mesh
function FlowArc({ color1 = "#8B5CF6", color2 = "#4B6EF5" }) {
  const meshRef = useRef();
  const materialRef = useRef();
  const time = useRef(0);

  // Create a smooth semi-circle geometry (like your SVG arc)
  const curve = new THREE.QuadraticBezierCurve3(
    new THREE.Vector3(-1.5, -0.6, 0),  // left bottom
    new THREE.Vector3(0, 0.8, 0),      // top (control point)
    new THREE.Vector3(1.5, -0.6, 0)    // right bottom
  );

  const points = curve.getPoints(200);
  const geometry = new THREE.BufferGeometry().setFromPoints(points);

  // Create gradient shader for flowing animation
  const vertexShader = `
    varying float vPos;
    void main() {
      vPos = position.x + position.y;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const fragmentShader = `
    uniform float iTime;
    uniform vec3 color1;
    uniform vec3 color2;
    varying float vPos;

    void main() {
      float glow = sin(vPos * 6.0 + iTime * 3.0) * 0.5 + 0.5;
      vec3 color = mix(color1, color2, glow);
      float alpha = smoothstep(0.2, 1.0, glow);
      gl_FragColor = vec4(color, alpha);
    }
  `;

  const uniforms = useRef({
    iTime: { value: 0 },
    color1: { value: new THREE.Color(color1) },
    color2: { value: new THREE.Color(color2) },
  });

  // Animate time for flow
  useFrame((state, delta) => {
    time.current += delta;
    uniforms.current.iTime.value = time.current;
  });

  return (
    <line ref={meshRef} geometry={geometry}>
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms.current}
        transparent
      />
    </line>
  );
}

// 🪄 Wrapper Canvas
export default function ArcCanvas() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <Canvas
        className="arc-canvas"
        camera={{ position: [0, 0, 3], fov: 45 }}
        dpr={Math.min(window.devicePixelRatio, 2)}
      >
        <FlowArc />
      </Canvas>
    </div>
  );
}
