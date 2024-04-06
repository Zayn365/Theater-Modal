import { useState, useEffect, useRef } from "react";

export default function AppsHooks() {
  const [modelLoaded, setModelLoaded] = useState(false);
  const [clickedMemory, setMemory] = useState();
  const [Switch, setSwitch] = useState(false);
  const audioRef = useRef(new Audio(process.env.PUBLIC_URL + '/music/This.wav'));

  useEffect(() => {
    setTimeout(() => {
      setModelLoaded(true);
    }, 15000);
  }, []);

  useEffect(() => {
    if(!modelLoaded){
        setTimeout(() => {
            if (Switch) {
                audioRef.current.play();
              } else {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
              }
        } , 6000)
    }
    else {
        if (Switch) {
            audioRef.current.play();
          } else {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
          }
    }
    
  }, [Switch]);


  return [modelLoaded, clickedMemory, setMemory, setSwitch, Switch];
}
