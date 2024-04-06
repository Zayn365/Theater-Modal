import { useState, useEffect, useMemo } from "react";

export default function AudienceHook({ data }) {
  const [memories, setMemories] = useState([]);
  const randomPositions = useMemo(() => {
    const positions = [];
    for (let i = 0; i < data?.memories.length; i++) {
      let position = generateRandomPosition();
      // eslint-disable-next-line
      while (positions.some(p => p[0] === position[0] && p[2] === position[2])) {
        position = generateRandomPosition();
      }
      positions.push(position);
    }
    return positions;
  }, [data]);

  useEffect(() => {
    if (data) {
      setMemories(data?.memories);
    } else {
      setMemories([]);
    }
  }, [data]);

  function generateRandomPosition() {
    const validNumbersX = [
      -6.2, -4.7, -1.8, -0.4,1.1,2.6,4.2, 5.7, 7.2, 8.6, 10.1, 11.6, 13
    ];
    const validNumbersZ = [12.5, 13.9, 15.4, 16.8,18.3 ,19.8, 21.2, 22.7];
  
    let randomIndexX = -1;
    let randomIndexZ = -1;
    let previousNumberX = -1;
    let previousNumberZ = -1;
  
    do {
      randomIndexX = Math.floor(Math.random() * validNumbersX.length);
      randomIndexZ = Math.floor(Math.random() * validNumbersZ.length);
  
      if (previousNumberX === validNumbersX[randomIndexX]) {
        randomIndexX = -1;
      }
  
      if (previousNumberZ === validNumbersZ[randomIndexZ]) {
        randomIndexZ = -1;
      }
  
      previousNumberX = validNumbersX[randomIndexX];
      previousNumberZ = validNumbersZ[randomIndexZ];
    } while (randomIndexX === -1 || randomIndexZ === -1);
  
    const randomNumberX = validNumbersX[randomIndexX];
    const randomNumberZ = validNumbersZ[randomIndexZ];
  
    return [randomNumberX, 1, randomNumberZ];
  }
  

  return [memories, randomPositions];
}
