import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const handleOnClickIncrement = () => {
    setCount((prev) => prev + step);
  };

  const handleOnClickDecrement = () => {
    if (count - step > 0) {
      setCount(count - step);
    } else {
      setCount(0);
    }
  };

  const handleOnClickReset = () => {
    setCount(0);
  };
  return (
    <div>
      <h1>Counter: {count}</h1>
      <div style={{ marginBottom: "29px" }}>
        <label>Step: </label>
        <select value={step} onChange={(e) => setStep(Number(e.target.value))}>
          <option value={1}>1</option>
          <option value={4}>4</option>
          <option value={8}>8</option>
          <option value={10}>10</option>
        </select>
      </div>
      <div>
        <button style={{ margin: "5px" }} onClick={handleOnClickIncrement}>
          Increment
        </button>
        <button
          style={{ margin: "5px" }}
          onClick={handleOnClickDecrement}
          disabled={count === 0}
        >
          Decrement
        </button>
        <button style={{ margin: "5px" }} onClick={handleOnClickReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
