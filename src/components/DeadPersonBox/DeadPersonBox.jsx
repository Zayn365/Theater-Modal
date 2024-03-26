import { useCallback, useEffect, useState } from "react";
import {Html} from '@react-three/drei'

export default function DeadPersonBox({data , setMemory}) {
    const [size] = useState(0.2);
    const [img , setImage] = useState();

    const d = useCallback(() => {
      if(data) {
        setImage(`${data?.image}`)
      }
      else {
        setImage('https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg')
      }
    }, [data]);

    useEffect(() => {
       d();
       // eslint-disable-next-line
    }, [d]);
    return (
      <mesh scale={[size * 16.3, 2.4, 0.2]} rotation={[0, -0.5, 0]} position={[20.8, 2.7, -5.2]}>
  <boxGeometry />
  <meshStandardMaterial color="black"/>
  <Html occlude distanceFactor={1.5} scale={[0.32, 0.28 , 0.1]} position={[0, 0, 1]} transform>
    <div className="w-100 h-100">
      <img src={img} onClick={() => {setMemory()}} alt='' />
    </div>
  </Html>
</mesh>

    )
  }