import './App.css';
import Model from '../src/components/MainModal/Hall';
import { Suspense, useRef, useState } from 'react'; // Import useRef
import { Canvas } from '@react-three/fiber';
import { OrbitControls, EnvironmentMap } from '@react-three/drei';
import BannerLeft from './components/Banner/BannerLeft'
import Slider from './components/Slider/Slider';
import Audience from './components/Audience/Audience';
import { data } from './utils/data';
import AppsHooks from './hooks/appHooks';
import BannerRight from './components/Banner/BannerRight';


function App() {
  const [modelLoaded, clickedMemory, setMemory, setSwitch] = AppsHooks();
  const [speaker , setSpeaker] = useState(true);
  const [fullScreen , setScreen] = useState(false);

  const handleSpeaker = (action) => {
    setSpeaker(prev => !prev);
    setSwitch(action);
  }
  const handleScreen = () => {
    setScreen(prev => !prev);
  }
  const modelRef = useRef();

  return (
    <div className={fullScreen ? 'FullApp' :'App container-fluid col-lg-8'}>
      {!modelLoaded ? (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
        <Canvas camera={{ position: [15, 10, 350], fov: 55, near: 0.1, far: 100 }}>
          <ambientLight intensity={2} />
          <OrbitControls
            enableZoom={true}
            enablePan={false}
            minPolarAngle={(Math.PI * 5.2) / 12}
            maxPolarAngle={(Math.PI * 5.5) / 12}
            minDistance={15}
            maxDistance={30}
            minAzimuthAngle={-Math.PI / 6} // -90 degrees
            maxAzimuthAngle={Math.PI / 6} // 90 degrees
          />
          <EnvironmentMap background="only" />
          <Suspense fallback={null}>
            <Slider data={data} id={clickedMemory} />
            <BannerLeft setMemory={setMemory} />
            <BannerRight setMemory={setMemory} />
            <Audience data={data} setMemory={setMemory} id={clickedMemory} fullScreen={fullScreen} />
            <Model ref={modelRef} />
          </Suspense>
        </Canvas>
        <div className='d-flex justify-content-between TrayMain'> 
        <div>
          {!speaker ? <button className='btn rounded-circle bg-light' onClick={() => handleSpeaker(false)}>
          <img src='/img/volume.png' width={15} height={15} alt='speakerOn' />
          </button> : 
          <button className='btn rounded-circle bg-light' onClick={() => handleSpeaker(true)}>
          <img src='/img/volume-mute.png' width={15} height={15} alt='speakerOff' />
          </button>}
        </div>
        <div>
          <button className='btn rounded-circle btn-light border-0' onClick={handleScreen}>
          <img src={fullScreen ? '/img/full-screen.png' :'/img/expand.png'} width={20} height={20} alt='Zoom' />
          </button>
        </div>
      </div>
      </>
      )}
     
    </div>
  );
}

export default App;
