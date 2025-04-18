import "./App.css";
import { Typography } from "@mui/material";
import Images from "./Images";
import Form from "./form";
import ImperativeHook from "./useImperativeHook";
import Form1 from "./Lists";
import CounterInterval from "./Interval/CounterInterval";
import Timer from "./Interval/Timer";
import TimeInterval from "./Interval/TimeInterval";
import InfiniteScrolling from "./pagination/InfiniteScrolling";

function App() {
  return (
    <div className="App">
      <CounterInterval />
      <Timer />
      <Typography variant="h4">Time Interval</Typography>
      <TimeInterval />
      {/* <Images /> */}
      {/* <Form /> */}
      {/* <ToDoList /> */}
      {/* <Form1 /> */}
      {/* <ImperativeHook /> */}
      <InfiniteScrolling />
    </div>
  );
}

export default App;
