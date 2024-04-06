import { useEffect, useState } from "react";
import {Html} from '@react-three/drei'

export default function DeadPersonBox({data , setMemory}) {
    const [size] = useState(0.2);
    return (
      <mesh scale={[size * 18.3, 3.4, 0.2]} rotation={[0, 0, 0]} position={[9, 4.7, 5.2]}>
  <boxGeometry />
  <meshStandardMaterial transparent opacity={0}/>
  <Html occlude distanceFactor={1.5} scale={[0.22, 0.20 , 0.1]} position={[0, 0, 1]} transform>
    <div className="image-container">
      <img src='img/G.png' className="w-100" onClick={() => {setMemory()}} alt='' />
    </div>
  </Html>
</mesh>
    )
  }