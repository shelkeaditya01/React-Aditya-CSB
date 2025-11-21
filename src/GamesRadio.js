import { useState } from "react";
const GamesRadio = () => {
  
  const options = ["Cricket", "Football", "Hockey", "Volleyball"];
  const days = ["Weekend", "Weekday"];

  const [games, setGames] = useState("Game");
  const [day, setDay] = useState("Days");

  const handleGames = (g) => {
    setGames(g);
  };

  const handleDay = (w) => {
    setDay(w);
  };

  return (
    <div>
      <h1>Which Game??</h1>
      <div style={{ marginBottom: "29px", marginTop: "-13px" }}>
        {options.map((g, i) => (
          <div key={i}>
            <span>{g}</span>
            <input
              type="radio"
              name="Option"
              value={g}
              onChange={() => handleGames(g)}
            ></input>
          </div>
        ))}
      </div>

      <h2>Select Days</h2>
      <div style={{ marginBottom: "29px", marginTop: "-13px" }}>
        {days.map((w, i) => (
          <div key={i}>
            <span>{w}</span>
            <input
              type="radio"
              name="Aditya"
              value={w}
              onChange={() => handleDay(w)}
            ></input>
          </div>
        ))}
      </div>
      <h4 style={{ marginBottom: "10px" }}>You will be playing</h4>
      <span>{games} on the </span>
      <span>{day}.</span>
      {/* <span>Aditya</span>
      <input type="radio" name="Aditya" value=""></input> */}
    </div>
  );
};

export default GamesRadio;
