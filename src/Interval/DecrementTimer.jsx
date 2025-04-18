import React, { useEffect } from "react";
import "./style.css";

export default function DecrementTimer() {
  const [timer, setTimer] = React.useState(10);
  const intervalRef = React.useRef(null);

  const handleClick = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setTimer(prev => {
        if (prev > 0) {
          return prev - 1;
        } else {
          clearInterval(intervalRef.current);
          return 0;
        }
      });
    }, 500);
  };
  const handleStop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  //   Decrement action without buttons
  //   useEffect(() => {
  //     intervalRef.current = setInterval(() => {
  //       setTimer((prev) => {
  //         if (prev > 0) {
  //           return prev - 1;
  //         } else {
  //           clearInterval(intervalRef.current);
  //           return 0;
  //         }
  //       });
  //     }, 500);
  //     return () => clearInterval(intervalRef.current);
  //   }, []);

  return (
    <div>
      <h1>Hello StackBlitz! {timer} </h1>
      <button onClick={handleClick}>start</button>
      <button onClick={handleStop}>stop</button>
    </div>
  );
}
