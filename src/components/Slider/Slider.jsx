import { useEffect, useState } from "react";
import {Html} from '@react-three/drei'




  export default function Slider({data, id}) {
    const [memories, setMemories] = useState();
    const [size] = useState(0.5);
    useEffect(() => {
      if(id){
      const filter = data?.memories.filter((val) => val.id === id);
       setMemories(filter);
      }
       else {
        setMemories(data?.memories);
       }
    } , [id , data]);

    return (
      <mesh scale={[size * 24, 6.1, 1]} position={[0,4,-10]}>
        <boxGeometry />
        <meshStandardMaterial color='black' className='mt-5' />
        <Html occlude distanceFactor={1.5} position={[0, 0, 0.51]} transform>
  
  <div id="carouselExampleControls" className="carousel slide carasol-div" data-ride="carousel">
    <div className="carousel-inner">
        {memories ? memories.map((item , key) => (
            <div key={key} className={`carousel-item ${key === 0 ? 'active' : ''}`}>
            <p className="audience-text">{item.message}</p>
            <span className="d-flex justify-content-end">
              <p className="audience-text">{item.name}</p>
            </span>
      </div>
        )) : ''}
    </div>
    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
        </Html>
      </mesh>
    )
  }