import { Button } from "@mui/material";
import React, { useState, useRef, useEffect } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(0);
  const intervalIdRef = useRef(null); // Use useRef to store the interval ID

  const handleClick = () => {
    if (intervalIdRef.current) {
      // If interval is running, stop it
      clearInterval(intervalIdRef.current);
      intervalIdRef.current = null;
    } else {
      // If no interval, start it
      intervalIdRef.current = setInterval(() => {
        setTimer(prev => prev + 1);
      }, 1000);
    }
  };

  // Cleanup interval on component unmount
  useEffect(() => {
    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, []);

  return (
    <>
      <h1>{timer}</h1>
      <Button onClick={handleClick}>
        {intervalIdRef.current ? "Stop Interval" : "Start Interval"}
      </Button>
    </>
  );
};

export default Timer;
