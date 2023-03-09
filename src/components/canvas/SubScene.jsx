import { AccumulativeShadows, RandomizedLight, Center } from '@react-three/drei'
import { useControls } from 'leva'

export default function SubScene({ ...props }) {
  return (
    <group position={[0, -0.65, 0]}>
      <Sphere />
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
  )
}

function Sphere() {
  const { roughness } = useControls({ roughness: { value: 1, min: 0, max: 1 } })
  return (
    <Center top>
      <mesh castShadow>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial metalness={1} roughness={roughness} />
      </mesh>
    </Center>
  )
}
