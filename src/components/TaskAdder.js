import React, { useEffect, useState } from "react";
import TaskDetail from "./TaskDetail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TaskAdder = () => {
  const [isDetailExpanded, setIsDetailExpanded] = useState(false);

  const toggleDetail = () =>
    setIsDetailExpanded((isDetailExpanded) => !isDetailExpanded);

  const [taskTitle, setTaskTitle] = useState("");

  const handleTaskTitle = (event) => {
    setTaskTitle(event.target.value);
  };

  return (
    <div className="task__adder">
      <label htmlFor="adder__input" className="adder__label border-0">
        <FontAwesomeIcon icon="plus" />
      </label>
      <input
        type="text"
        id="adder__input"
        name="title"
        className="adder__input"
        placeholder="Add Task"
        value={taskTitle}
        onChange={handleTaskTitle}
      />
      <button className="adder__option border-0" onClick={toggleDetail}>
        <FontAwesomeIcon icon="ellipsis-v" />
      </button>
      <TaskDetail title={taskTitle} expanded={isDetailExpanded} />
    </div>
  );
};

export default TaskAdder;
