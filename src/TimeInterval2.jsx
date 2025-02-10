import { Button } from "@mui/material";
import React, { useState } from "react";

const TimeInterval2 = () => {
  const [timeInterval, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const handleClick = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
    const id = setInterval(() => {
      setTime(prev => {
        if (prev >= timeInterval + 10) {
          clearInterval(id);
          return prev;
        }
        return prev + 1;
      });
    }, 100);
    setIntervalId(id);
  };

  return (
    <>
      <div>TimeInterval2 {timeInterval}</div>
      <Button onClick={handleClick}>click</Button>
    </>
  );
};

export default TimeInterval2;
