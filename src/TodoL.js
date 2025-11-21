import { useState } from "react";
const TodoL = () => {
  const [input, setInput] = useState("");
  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    if (input.trim() == "") {
      return;
    }
    const newTask = {
      id: Date.now(),
      task: input,
      completed: false,
    };
    setTaskList([...taskList, newTask]);
    setInput("");
  };

  const onDelete = (index) => {
    setTaskList(taskList.filter((t) => t.id != index));
  };
  return (
    <div>
      <h1>To Do</h1>
      <div>
        <input
          placeholder="Enter task.."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <button onClick={addTask}>Add Tasks</button>
      </div>
      <ul>
        {taskList.map((t, index) => (
          <li key={index}>
            {t.task}
            <button key={index} onClick={() => onDelete(t.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoL;
