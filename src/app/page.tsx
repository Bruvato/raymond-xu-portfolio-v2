"use client";

import {
  FlyControls,
  Grid,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useControls } from "leva";

export default function Home() {
  return (
    <div className="fixed w-full h-full bg-gradient-to-b from-slate-900 to-black">
      <Canvas className="">
        <PerspectiveCamera position={[0, 3, 5]} fov={75} makeDefault />
        <OrbitControls autoRotate autoRotateSpeed={4} />

        <Grid
          cellSize={1}
          cellColor="#444444"
          sectionSize={5}
          sectionColor="#ff0000"
          fadeDistance={50}
        />

        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 10, 7]} intensity={1.5} castShadow />
        <pointLight position={[-5, 5, 5]} intensity={0.8} color="#60a5fa" />
        <pointLight position={[5, 5, -5]} intensity={0.6} color="#f472b6" />

        <mesh position={[0, 0, 0]} castShadow receiveShadow>
          <torusGeometry args={[2, 0.8, 16, 100]} />
          <meshStandardMaterial
            color="#ff6b35"
            metalness={0.4}
            roughness={0.5}
          />
        </mesh>
      </Canvas>
    </div>
  );
}
