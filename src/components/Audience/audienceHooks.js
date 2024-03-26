import { useState, useEffect, useMemo } from "react";

export default function AudienceHook({data, setMemory}) {
    const [memories, setMemories] = useState([]);

    const randomPositions = useMemo(() => {
      const positions = [];
      for (let i = 0; i < 10; i++) {
        let position = generateRandomPosition();
        // eslint-disable-next-line
        while (positions.some(p => p[0] === position[0] && p[2] === position[2])) {
          position = generateRandomPosition();
        }
        positions.push(position);
      }
      return positions;
      // eslint-disable-next-line
    }, []);
  
    useEffect(() => {
      if (data) {
        setMemories(data?.memories);
      } else {
        setMemories([]);
      }
    }, [data]);
  
    function generateRandomPosition() {
      let x, y, z;
  
      x = Math.random() * (100 - (-100)) - 100;
      y = 1;
      z = Math.random() * (100 - (-100)) - 100;
  
      if (x <= -7.5 || x >= 15 || (x >= 3 && x <= 5.499999)) {
        return generateRandomPosition();
      }
  
      if (z < 9 || z > 23.5) {
        return generateRandomPosition();
      }
  
      return [Math.floor(x), y, Math.floor(z)];
    }

    return [memories, randomPositions]
}