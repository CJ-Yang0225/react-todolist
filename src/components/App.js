import React, { useState, useEffect } from "react";
import TaskNavbar from "./TaskNavbar";
import TaskCreateForm from "./TaskCreateForm";
import TaskCard from "./TaskCard";

const loadTasks = () => JSON.parse(localStorage.getItem("taskList")) || [];

const saveTasks = (tasks) =>
  localStorage.setItem("taskList", JSON.stringify(tasks));

const TaskFilter = {
  All: () => true,
  Processing: (task) => !task.isDone,
  Completed: (task) => task.isDone
};

const App = () => {
  const [tasks, setTasks] = useState(loadTasks);
  const [taskFilterType, setTaskFilterType] = useState("All");

  useEffect(() => saveTasks(tasks), [tasks]);

  const setTask = (index) => (task) =>
    setTasks(([...tasks]) => Object.assign(tasks, { [index]: task }));

  const addTask = (task) => setTasks((tasks) => [...tasks, task]);

  const removeTask = (indexForRemove) => () =>
    setTasks((tasks) => tasks.filter((_, index) => index !== indexForRemove));

  return (
    <>
      <header>
        <TaskNavbar value={taskFilterType} onChange={setTaskFilterType} />
      </header>
      <main className="container main">
        <TaskCreateForm onCreate={addTask} />

        {tasks
          .map((task, index) => [task, index])
          .filter(([task]) => TaskFilter[taskFilterType](task))
          .sort(([taskA], [taskB]) => taskB.isFavorite - taskA.isFavorite)
          .map(([task, index]) => (
            <TaskCard
              key={index}
              value={task}
              onChange={setTask(index)}
              onRemove={removeTask(index)}
            />
          ))}
      </main>
    </>
  );
};

export default App;
