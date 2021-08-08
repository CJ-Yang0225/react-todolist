import React, { useState, useEffect } from "react";
import { animated, useSpringRef, useTransition, useChain } from "react-spring";
import TaskNavbar from "./TaskNavbar";
import TaskCreateForm from "./TaskCreateForm";
import TaskCard from "./TaskCard";

const demoTasks = [
  {
    title: "期末考",
    date: "2021-01-13",
    time: "08:10",
    message: "資料庫系統、工程數學",
    isDone: true,
    isFavorite: false,
  },
  {
    title: "家務",
    date: "2021-01-15",
    time: "10:00",
    message: "掃地、拖地、洗衣服",
    isDone: false,
    isFavorite: false,
  },
  {
    title: "Learning",
    date: "2021-12-31",
    time: "23:59",
    message: "React, Next.js, GraphQL",
    isDone: false,
    isFavorite: true,
  },
];

const loadTasks = () =>
  JSON.parse(localStorage.getItem("taskList")) || demoTasks;

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
    setTasks((tasks) => Object.assign([...tasks], { [index]: task }));

  const addTask = (task) => setTasks((tasks) => [...tasks, task]);

  const removeTask = (indexForRemove) => () =>
    setTasks((tasks) => tasks.filter((_, index) => index !== indexForRemove));

  const filteredTasks = tasks
    .map((task, index) => [task, index])
    .filter(([task]) => TaskFilter[taskFilterType](task))
    .sort(([taskA], [taskB]) => taskB.isFavorite - taskA.isFavorite)
    .map(([task, index]) => (
      <TaskCard
        key={index}
        value={task}
        onUpdate={setTask(index)}
        onRemove={removeTask(index)}
      />
    ));

  const tasksRef = useSpringRef();

  const transitionTasks = useTransition(filteredTasks, {
    ref: tasksRef,
    keys: new Array(filteredTasks.length).fill().map((_, index) => index),
    trail: 500 / filteredTasks.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  });

  useChain([tasksRef], [0.5]);

  return (
    <React.Fragment>
      <header>
        <TaskNavbar value={taskFilterType} onChange={setTaskFilterType} />
      </header>
      <main className="container main">
        <TaskCreateForm onCreate={addTask} />
        {transitionTasks((style, task) => (
          <animated.div
            className="task-card__wrapper"
            style={style}
            children={task}
          />
        ))}
      </main>
    </React.Fragment>
  );
};

export default App;
