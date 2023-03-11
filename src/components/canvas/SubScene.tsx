import { AccumulativeShadows, RandomizedLight, Center } from '@react-three/drei';
import { useRef } from 'react';

export default function SubScene({ ...props }) {
  return (
    <group position={[0, 0, 0]}>
      <BasicParticles />
      <AccumulativeShadows
        temporal
        frames={200}
        color='purple'
        colorBlend={0.5}
        opacity={1}
        scale={10}
        alphaTest={0.85}>
        <RandomizedLight amount={8} radius={5} ambient={0.5} position={[5, 3, 2]} bias={0.001} />
      </AccumulativeShadows>
    </group>
  );
}

const BasicParticles = () => {
  // This reference gives us direct access to our points
  const points = useRef();

  // You can see that, like our mesh, points also takes a geometry and a material,
  // but a specific material => pointsMaterial
  return (
    <points ref={points} castShadow>
      <sphereGeometry args={[1, 64, 64]} />
      <pointsMaterial color='#5786F5' size={0.015} sizeAttenuation />
    </points>
  );
};
