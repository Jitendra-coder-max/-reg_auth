import React,{useState,useEffect} from 'react';

function Countdown() {
  const [count, setCount] = useState(0);
  const [inputNumber, setInputNumber] = useState('');

  const handleInputChange = (event) => {
    setInputNumber(event.target.value);
  };

  const startCountdown = () => {
    const parsedNumber = parseInt(inputNumber);
   
      setCount(parsedNumber);
    
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount === 0) {
          clearInterval(timer);
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [count]);

  return (
    <div>
      <h2>Countdown: {count}</h2>
      <input type="text" value={inputNumber} onChange={handleInputChange} />
      <button onClick={startCountdown}>Start Countdown</button>
    </div>
  );
}

export default Countdown;
