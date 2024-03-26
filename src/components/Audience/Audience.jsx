// eslint-disable-next-line
import { useState } from "react";
import { Html } from '@react-three/drei';
import AudienceHook from "./audienceHooks";

export default function Box4({ data, setMemory , id }) {
  const [size] = useState(0.5);
  const [memories, randomPositions ] = AudienceHook({data, setMemory});
  

  return (
    <>
      {memories.map((val, index) => (
        <mesh key={val.id} rotation={[0, Math.PI, 0]} scale={[size * 7, 3, 1]} position={randomPositions[index]}>
          <boxGeometry />
          <meshStandardMaterial transparent opacity={0} />
          <Html occlude distanceFactor={1.5} position={[1, 0, 0.2]} transform>
            <div className={val.id === id ? 'audience-div' : ''}>
              <img className="audience-border" height='80px' onClick={() => setMemory(val.id)} width='80px' src={val.image} alt='' />
            </div>
          </Html>
        </mesh>
      ))}
    </>
  );
}
