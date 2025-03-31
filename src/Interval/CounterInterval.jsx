import React, { useState, useEffect } from "react";

// This component demonstrates a counter that increments and decrements its value
// Example: CounterInterval - 0
// The counter starts at 0 and increments to 5, then decrements back to 0, and repeats this cycle.


const CounterInterval = () => {
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
  return <div>CounterInterval - {counter}</div>;
};

export default CounterInterval;
