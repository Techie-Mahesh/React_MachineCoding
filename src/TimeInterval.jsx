import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";

const TimeInterval = () => {
  const [timeInterval, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const handleClick = () => {

    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    } else {
      const id = setInterval(() => {
        
        setTime(prev => prev + 1);
      }, 1000);
      setIntervalId(id);
    }
  };

  // Clear interval when component unmounts
  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);
  return (
    <>
      <h1>{timeInterval}</h1>
      <Button onClick={handleClick}> start Interval</Button>
    </>
  );
};

export default TimeInterval;
