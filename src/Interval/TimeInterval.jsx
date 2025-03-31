import { Button } from "@mui/material";
import React, { useState, useRef } from "react";

// This component demonstrates a time interval that increments its value by 1 every 100ms
// Example: TimeInterval - 0
// The time interval starts at 0 and increments to 10, The timer increases in steps of 10 onClicking the button.
// The interval stops after reaching 10 increments.

const TimeInterval = () => {
  const [timeInterval, setTimeInterval] = useState(0);
  const intervalIdRef = useRef(null);

  const handleClick = () => {
    // If interval is already running, clear it
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
      intervalIdRef.current = null;
    }

    // Start a new interval that increments the counter by 1 every 100ms
    intervalIdRef.current = setInterval(() => {
      setTimeInterval(prev => {
        // Stop the interval after reaching 10 increments
        if (prev >= timeInterval + 10) {
          clearInterval(intervalIdRef.current);
          intervalIdRef.current = null; // Clear the interval reference
          return prev; // Return the final value
        }
        return prev + 1; // Increment by 1
      });
    }, 100);
  };

  return (
    <>
      <div>TimeInterval: {timeInterval}</div>
      <Button onClick={handleClick}>Click Me</Button>
    </>
  );
};

export default TimeInterval;
