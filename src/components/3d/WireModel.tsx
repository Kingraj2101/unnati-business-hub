
import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, useTexture, Environment, Float } from "@react-three/drei";
import * as THREE from "three";

function WireMesh({ position = [0, 0, 0], rotation = [0, 0, 0], color = "#1E90FF" }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += 0.003;
    meshRef.current.rotation.x += 0.001;
  });

  return (
    <mesh ref={meshRef} position={position} rotation={rotation}>
      <torusKnotGeometry args={[1, 0.3, 128, 16, 2, 3]} />
      <meshStandardMaterial 
        color={color} 
        wireframe={true}
        emissive={color}
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

function ElectricalSphere({ position = [0, 0, 0], color = "#daa520" }) {
  const sphereRef = useRef();
  const [hover, setHover] = useState(false);
  
  useFrame((state) => {
    if (!sphereRef.current) return;
    
    // Add a subtle pulsing effect
    sphereRef.current.scale.x = THREE.MathUtils.lerp(
      sphereRef.current.scale.x,
      hover ? 1.2 : 1,
      0.1
    );
    sphereRef.current.scale.y = sphereRef.current.scale.x;
    sphereRef.current.scale.z = sphereRef.current.scale.x;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh 
        ref={sphereRef} 
        position={position}
        onPointerEnter={() => setHover(true)}
        onPointerLeave={() => setHover(false)}
      >
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial 
          color={color} 
          roughness={0.1}
          metalness={0.8}
          emissive={color}
          emissiveIntensity={0.4}
        />
      </mesh>
    </Float>
  );
}

export const WireModel = () => {
  return (
    <div className="h-80 md:h-96 w-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#daa520" intensity={0.5} />
        
        <WireMesh position={[0, 0, 0]} color="#1E90FF" />
        <ElectricalSphere position={[2, 0, 0]} color="#daa520" />
        <ElectricalSphere position={[-2, 0, 0]} color="#daa520" />
        <ElectricalSphere position={[0, 2, 0]} color="#1E90FF" />
        
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default WireModel;
