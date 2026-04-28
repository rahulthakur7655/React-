import React from "react";

const Button = ({ task, setTask, tasks, setTasks }) => {
  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, task]);
    setTask("");
  };

  return <button onClick={addTask}>Click Me</button>;
};

export default Button;