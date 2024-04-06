// eslint-disable-next-line
import { useState } from "react";
import { Html } from '@react-three/drei';
import AudienceHook from "./audienceHooks";

export default function Box4({ data, setMemory , id,fullScreen }) {
  const [size] = useState(0.5);
  const [memories, randomPositions ] = AudienceHook({data, setMemory});
  

  return (
    <>
     {memories.map((val, index) => {
      console.log(randomPositions[index])
       return <mesh key={val.id} rotation={[0, Math.PI, 0]} scale={[size * 7, 3, 1]} position={randomPositions[index]}>
          <boxGeometry />
          <meshStandardMaterial transparent opacity={0} />
          <Html occlude={false} distanceFactor={1.5} position={[1, 0, 0.2]} className={fullScreen? "ht" : "ht-w"} transform>
            <div className={val.id === id ? 'audience-div' : ''}>
              <img className="audience-border" height='70px' onClick={() => setMemory(val.id)} width='70px' src={val.image} alt='' />
            </div>
          </Html>
        </mesh>
})}
{/* <mesh rotation={[0, Math.PI, 0]} scale={[size * 7, 3, 1]} position={[1.2,1,16.8]}>
          <boxGeometry />
          <meshStandardMaterial transparent opacity={0} />
          <Html occlude={false} distanceFactor={1.5} position={[1, 0, 0.2]} className={fullScreen? "ht" : "ht-w"} transform>
            <div >
              <img className="audience-border" height='70px' onClick={() => setMemory()} width='70px' src={'img/img2.png'} alt='' />
            </div>
          </Html>
        </mesh> */}
    </>
  );
}
