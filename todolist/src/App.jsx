import React, { useState } from "react";
import "./App.css"
import Input from "./Input";
import Button from "./Button";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  return (
    <div>
      <Input task={task} setTask={setTask} />
      <Button
        task={task}
        setTask={setTask}
        tasks={tasks}
        setTasks={setTasks}
      />

      <ul>
        {tasks.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;