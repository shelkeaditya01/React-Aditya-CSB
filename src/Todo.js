import { useState } from "react";
const Todo = () => {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);
// add fucntion +++++
  const onAdd = () => {
    if (input.trim() === "") {
      return;
    }
    const newTodos = {
      id: Date.now(),
      text: input,
      completed: false,
    };
    setTodoList([...todoList, newTodos]);
    setInput("");
  };
// delete function
  const onDelete = (id) => {
    setTodoList(todoList.filter((t) => t.id != id));
  };

  return (
    <div>
      <div>
        <h1>Todo List</h1>
        <input
          placeholder="Enter Todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <button onClick={onAdd}>Add</button>
      </div>
      <ul style={{ listStyle: "none" }}>
        {todoList.map((t, id) => (
          <li key={t.id}>
            {t.text}
            <button style={{ margin: "10px" }} onClick={() => onDelete(t.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
