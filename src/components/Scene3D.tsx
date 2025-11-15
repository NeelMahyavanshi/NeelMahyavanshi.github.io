import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import { useRef, useState } from 'react';
import * as THREE from 'three';

const AnimatedSphere = ({ position, color, speed }: { position: [number, number, number], color: string, speed: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * speed;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * speed * 0.5;
      
      // Smooth scale animation on hover
      const targetScale = hovered ? 1.8 : 1.5;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere 
        ref={meshRef} 
        args={[1, 64, 64]} 
        position={position} 
        scale={1.5}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={hovered ? 0.6 : 0.4}
          speed={hovered ? 3 : 2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const MouseFollower = () => {
  const { camera } = useThree();
  const lightRef = useRef<THREE.PointLight>(null);
  
  useFrame((state) => {
    if (lightRef.current) {
      // Make light follow mouse position
      const x = state.mouse.x * 5;
      const y = state.mouse.y * 5;
      lightRef.current.position.x = THREE.MathUtils.lerp(lightRef.current.position.x, x, 0.1);
      lightRef.current.position.y = THREE.MathUtils.lerp(lightRef.current.position.y, y, 0.1);
    }
  });
  
  return <pointLight ref={lightRef} position={[0, 0, 5]} intensity={2} color="#00d9ff" distance={10} />;
};

const CameraController = () => {
  const { camera } = useThree();
  
  useFrame((state) => {
    // Parallax effect with mouse movement
    const x = state.mouse.x * 0.5;
    const y = state.mouse.y * 0.5;
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, x, 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, y, 0.05);
  });
  
  return null;
};

const Scene3D = () => {
  return (
    <div className="fixed inset-0 -z-10 opacity-40" style={{ pointerEvents: 'auto' }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} style={{ pointerEvents: 'auto' }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#00d9ff" />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#ff6b35" />
        
        <MouseFollower />
        <CameraController />
        
        <AnimatedSphere position={[-2, 0, 0]} color="#00d9ff" speed={0.3} />
        <AnimatedSphere position={[2, -1, -2]} color="#ff6b35" speed={0.2} />
        <AnimatedSphere position={[0, 2, -1]} color="#00d9ff" speed={0.25} />
      </Canvas>
    </div>
  );
};

export default Scene3D;
