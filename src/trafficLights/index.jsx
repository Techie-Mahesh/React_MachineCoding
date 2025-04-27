// Description: A simple traffic light simulation using React. The traffic light changes colors based on a timer, and users can manually change the light or increase the time of the active light.

import React, { useState, useEffect, useCallback } from "react";
import "./trafficLight.css";

// Light Component
const Light = React.memo(({ color, isActive }) => (
  <div
    className={`trafficLight ${color} ${isActive ? "active" : ""}`}
    style={{ backgroundColor: color, opacity: isActive ? 1 : 0.5 }}
  />
));

// Controls Component
const Controls = React.memo(({ onChangeLight, onIncreaseTime }) => (
  <div className="controls">
    <button onClick={() => onChangeLight("red")}>Red</button>
    <button onClick={() => onChangeLight("yellow")}>Yellow</button>
    <button onClick={() => onChangeLight("green")}>Green</button>
    <input
      type="number"
      placeholder="Increase time"
      onKeyDown={e => {
        if (e.key === "Enter") {
          onIncreaseTime(parseInt(e.target.value, 10));
          e.target.value = "";
        }
      }}
    />
  </div>
));

// TrafficLight Component
const TrafficLight = () => {
  const [currentLight, setCurrentLight] = useState("red");
  const [timeLeft, setTimeLeft] = useState(10);

  const lightConfig = {
    red: { next: "yellow", duration: 10 },
    yellow: { next: "green", duration: 3 },
    green: { next: "red", duration: 10 }
  };

  const startTimer = useCallback(() => {
    const interval = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= 1) {
          clearInterval(interval);
          setCurrentLight(lightConfig[currentLight].next);
          return lightConfig[lightConfig[currentLight].next].duration;
        }
        return prevTime - 1;
      });
    }, 1000);

    return interval;
  }, [currentLight]);

  useEffect(() => {
    const interval = startTimer();
    return () => clearInterval(interval);
  }, [startTimer]);

  const handleChangeLight = color => {
    if (color !== currentLight) {
      setCurrentLight(color);
      setTimeLeft(lightConfig[color].duration);
    }
  };

  const handleIncreaseTime = additionalTime => {
    if (!isNaN(additionalTime) && additionalTime > 0) {
      setTimeLeft(prevTime => prevTime + additionalTime);
    }
  };

  return (
    <div className="trafficLightContainer">
      <h1>Traffic Light</h1>
      <h5>Time Left: {timeLeft}s</h5>
      <Controls
        onChangeLight={handleChangeLight}
        onIncreaseTime={handleIncreaseTime}
      />
      <div className="lights">
        {["red", "yellow", "green"].map(color => (
          <Light key={color} color={color} isActive={color === currentLight} />
        ))}
      </div>
    </div>
  );
};

export default TrafficLight;

// import { useEffect, useState } from "react";
// import "./trafficLight.css";

// const TrafficLights = () => {
//   const [light, setLight] = useState("red");
//   const [trafficLights, setTrafficLights] = useState({
//     red: {
//       next: "yellow",
//       time: 10
//     },
//     yellow: {
//       next: "green",
//       time: 3
//     },
//     green: {
//       next: "red",
//       time: 10
//     }
//   });
//   const [timer, setTimer] = useState(trafficLights[light].time);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTimer(prev => {
//         if (prev <= 0) {
//           clearInterval(interval);
//           setLight(trafficLights[light].next);
//           return trafficLights[trafficLights[light].next].time;
//         }
//         return prev - 1;
//       });
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [timer, light, trafficLights]);

//   const handleClick = color => {
//     if (color === light) {
//       return;
//     }
//     setLight(color);
//     setTimer(trafficLights[color].time);
//   };

//   const handleTimerChange = e => {
//     if (e.key === "Enter") {
//       const newTime = parseInt(e.target.value, 10);
//       if (!isNaN(newTime) && newTime > 0) {
//         setTimer(prev => prev + newTime);
//       }
//       e.target.value = "";
//     }
//   };

//   return (
//     <div>
//       <h1>Traffic Lights</h1>
//       <h5>time: {timer}</h5>
//       <div>
//         <input
//           type="text"
//           onKeyDown={handleTimerChange}
//           placeholder="Increase time of active light"
//         />
//       </div>
//       <div className="buttonContainer">
//         <button onClick={() => handleClick("red")}>Red</button>
//         <button onClick={() => handleClick("yellow")}>Yellow</button>
//         <button onClick={() => handleClick("green")}>Green</button>
//       </div>
//       <div className="container">
//         <div
//           className="trafficLight"
//           style={{ backgroundColor: "red", opacity: light === "red" ? 1 : 0.4 }}
//         ></div>
//         <div
//           className="trafficLight"
//           style={{
//             backgroundColor: "yellow",
//             opacity: light === "yellow" ? 1 : 0.4
//           }}
//         ></div>
//         <div
//           className="trafficLight"
//           style={{
//             backgroundColor: "green",
//             opacity: light === "green" ? 1 : 0.4
//           }}
//         ></div>
//       </div>
//     </div>
//   );
// };

// export default TrafficLights;
