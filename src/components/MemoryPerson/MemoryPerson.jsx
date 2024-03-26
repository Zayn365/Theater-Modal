import { useState, useMemo } from "react";
import {Html} from '@react-three/drei'


export default function Box3({id , data}) {
    const [size] = useState(0.5);
    const [memory , setMemory] = useState();

    useMemo(() => {
      if(data){
       const d = data?.memories.filter(val => val.id === id);      
       setMemory(...d);
      } else {
        setMemory({});
      }
    }, [id , data]);

    
    return (
      <mesh scale={[size * 6, 3,0.1]} rotation={[0, -0.5, 0]} position={[21,2.8,-5]}>
        <boxGeometry />
        <meshStandardMaterial transparent opacity={0}   />
        <Html occlude distanceFactor={1.5} position={[0, 0, 0.51]} transform>
          <div>
            {memory ? <img height='150px' width='200px'  src={memory && memory.image}  alt=''/> : ''}
          </div>
        </Html>
      </mesh>
    )
  }