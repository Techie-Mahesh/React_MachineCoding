import React from "react";

const CounterInterval = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let counter = 0;
    setTimeout(() => {
      setCount(prev => {
        if (prev >= 0 && prev <= 5) {
          counter = counter + 1;
          return prev + 1;
        } else {
          counter = counter - 1;
          return prev - 1;
        }
      });
    }, 1000);
  });
  const [counter, setCounter] = useState(0);
  const [isIncrementing, setIsIncrementing] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prevCounter => {
        if (prevCounter === 5) {
          setIsIncrementing(false);
          return prevCounter - 1;
        } else if (prevCounter === 0) {
          setIsIncrementing(true);
          return prevCounter + 1;
        } else {
          return isIncrementing ? prevCounter + 1 : prevCounter - 1;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isIncrementing]);
  return <div>CounterInterval {counter}</div>;
};

export default CounterInterval;
