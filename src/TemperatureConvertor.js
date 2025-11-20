import { useState } from "react";
const TemperatureConvertor = () => {
  const [degree, setDegree] = useState("");
  const [fh, setFh] = useState("");


  //celcius to the fahrenheit
  const cToF = () => {
    if (degree === "") {
      return;
    }
    setFh(Number(degree) * 1.8 + 32);
  };
  return (
    <div>
      <div>
        <h1>Celcius to Fahrenheit:</h1>
        <input
          placeholder="Enter °C"
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
        ></input>
        <button onClick={cToF}>Convert</button>
        {fh !== "" && (
          <h4>
            {degree}°C = {fh}°F
          </h4>
        )}
      </div>
    </div>
  );
};

export default TemperatureConvertor;
