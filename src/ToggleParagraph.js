import { useState } from "react";
const ToggleParagraph = () => {
  const [hide, setHide] = useState(true);
  const handleHide = () => {
    setHide(!hide);
    // if (hide == true) {
    //   setHide(false);
    // } else {
    //   setHide(true);
    // }
  };
  return (
    <div style={{ margin: "10px" }}>
      <button onClick={handleHide}>{hide ? "Hide" : "Show"}</button>
      {hide && <p>This is the paragraph text that gets toggled!</p>}
    </div>
  );
};

export default ToggleParagraph;
