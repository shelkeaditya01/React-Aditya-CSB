import { useState } from "react";
const Tabs = () => {
  const tabs = [
    { label: "Home", content: "Welcome to the Home page!" },
    { label: "Profile", content: "This is your Profile page." },
    { label: "Settings", content: "Adjust your settings here." },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const displayTag = (index) => {
    setActiveIndex(index);
  };

  return (
    <div style={{ margin: 40 }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {tabs.map((t, index) => (
          <button
            style={{
              padding: "5px",
              margin: "10px",
              fontWeight: "bold",
              cursor: "pointer",
              backgroundColor: activeIndex === index ? "blueviolet" : "white",
            }}
            key={index}
            onClick={() => displayTag(index)}
          >
            {t.label}
          </button>
        ))}
      </div>
      {
        <div style={{ marginTop: 10, border: "2px solid black", padding: 20 }}>
          {tabs[activeIndex].content}
        </div>
      }
    </div>
  );
};

export default Tabs;
