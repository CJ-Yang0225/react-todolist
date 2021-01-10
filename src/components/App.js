import React, { useState, useEffect } from "react";
import TaskNavbar from "./TaskNavbar";
import TaskCreateForm from "./TaskCreateForm";
import TaskCard from "./TaskCard";

const demoTasks = [
  {
    title: "期末考",
    date: "2021-01-13",
    time: "08:10",
    message: "讀書讀書讀書",
    isDone: false,
    isFavorite: true,
  },
  {
    title: "洗衣服",
    date: "2021-01-10",
    time: "10:00",
    message: "洗洗洗洗洗洗",
    isDone: true,
    isFavorite: false,
  },
];

const loadTasks = () => JSON.parse(localStorage.getItem("taskList")) || demoTasks;

const saveTasks = (tasks) =>
  localStorage.setItem("taskList", JSON.stringify(tasks));

const TaskFilter = {
  All: () => true,
  Processing: (task) => !task.isDone,
  Completed: (task) => task.isDone,
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
