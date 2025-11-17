import Counter from "./Counter";
import Todo from "./Todo";
import TemperatureConvertor from "./TemperatureConvertor";
import SearchFilter from "./SearchFilter";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode == "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };
  return (
    <div
      className="App"
      style={{
        backgroundColor: mode == "light" ? "white" : "black",
        color: mode == "light" ? "black" : "white",
      }}
    >
      <button onClick={toggleMode}>
        Enable {mode == "light" ? "dark" : "light"} mode
      </button>
      {/* <Counter></Counter> */}
      {/* <Todo></Todo> */}
      {/* <TemperatureConvertor></TemperatureConvertor> */}
      <SearchFilter></SearchFilter>
    </div>
  );
}
