"use client";

import { Grid, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <div className="fixed w-full h-full">
      <Canvas className="">
        <OrbitControls />

        <Grid />

        <directionalLight />

        <mesh position={[0, 0, 0.5]}>
          <torusGeometry args={[1, 0.4, 16, 100]} />
          <meshStandardMaterial color="orange" />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <planeGeometry args={[5, 5]} />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  );
}
