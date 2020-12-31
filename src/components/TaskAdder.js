import React, { useState } from "react";
import TaskDetail from "./TaskDetail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TaskAdder = () => {
  const [isDetailExpanded, setIsDetailExpanded] = useState(false);

  const toggleDetail = () =>
    setIsDetailExpanded((isDetailExpanded) => !isDetailExpanded);

  return (
    <div className="task__adder">
      <label htmlFor="adder__input" className="adder__label border-0">
        <FontAwesomeIcon icon="plus" />
      </label>
      <input
        type="text"
        id="adder__input"
        className="adder__input"
        placeholder="Add Task"
      />
      <button className="adder__option border-0" onClick={toggleDetail}>
        <FontAwesomeIcon icon="ellipsis-v" />
      </button>
      <TaskDetail expanded={isDetailExpanded} />
    </div>
  );
};

export default TaskAdder;
