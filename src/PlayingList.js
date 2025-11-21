import { useState } from "react";

const PlayingList = () => {
  const ap = ["Play Cricket", "Play Game", "Read Book", "Eat"];

  const [playList, setPlayList] = useState(ap);
  const [completed, setCompleted] = useState(Array(ap.length).fill(false));

  const handleCompleted = (i) => {
    const newCompleted = [...completed];
    newCompleted[i] = !newCompleted[i]; // toggle completed
    setCompleted(newCompleted);
  };

  const onDelete = (p) => {
    const index = playList.indexOf(p);
    const newPlayList = playList.filter((g) => g !== p);
    const newCompleted = completed.filter((_, idx) => idx !== index);
    setPlayList(newPlayList);
    setCompleted(newCompleted);
  };

  return (
    <div>
      {playList.map((p, i) => (
        <div key={i}>
          <input
            type="checkbox"
            checked={completed[i]}
            onChange={() => handleCompleted(i)}
          />
          <span
            style={{ textDecoration: completed[i] ? "line-through" : "none" }}
          >
            {p}
          </span>
          {completed[i] && (
            <button style={{ marginLeft: "10px" }} onClick={() => onDelete(p)}>
              Delete
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default PlayingList;
