import  { useState, useEffect } from 'react';

const Example2 =() =>{
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer: number | undefined;
    if (isRunning) {
      timer = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000); 
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const startCounter = () => setIsRunning(true);

  const pauseCounter = () => setIsRunning(false);

  const resetCounter = () => {
    setIsRunning(false);
    setCount(0);
  };

  return (
    <div>
      <h1>{count} seconds</h1>
      <button onClick={startCounter}>Start</button>
      <button onClick={pauseCounter}>Pause</button>
      <button onClick={resetCounter}>Reset</button>
    </div>
  );
}

export default Example2;
