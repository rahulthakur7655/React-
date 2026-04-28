import React from "react";

const Input = ({ task, setTask }) => {
  return (
    <input
      type="text"
      placeholder="todo list"
      value={task}
      onChange={(e) => setTask(e.target.value)}
    />
  );
};

export default Input;