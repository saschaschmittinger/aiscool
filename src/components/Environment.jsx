import { Canvas } from "@react-three/fiber";
import { Box, Gltf, Environment } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";

export default function EnvironmentCom() {
  return (
    <Canvas>
      <OrbitControls />
      <Environment preset="forest" />
      <ambientLight intensity={0.8} color={"red"} />

      <Gltf
        src="/models/classroom.glb"
        position={[0, -8, 0]}
        rotation={[0, Math.PI, 0]}
      />
      <Gltf
        src="/models/emilian-avatar.glb"
        scale={(7, 7, 7)}
        position={[-11, -7.95, -14]}
        rotation={[0, 0.5, 0]}
      />
    </Canvas>
  );
}
