import "./App.css";
import { Typography } from "@mui/material";
import TimeInterval from "./TimeInterval";
import TimeInterval2 from "./TimeInterval2";
import Images from "./Images";
import Form from "./form";
import ImperativeHook from "./useImperativeHook";
import Form1 from "./Lists";

function App() {
  return (
    <div className="App">
      {/* <Images /> */}
      {/* <Form /> */}
      <Typography variant="h4">Time Interval</Typography>
      {/* <ToDoList /> */}
      <Form1 />
      {/* <ImperativeHook /> */}
    </div>
  );
}

export default App;
