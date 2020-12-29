import React, { useState } from "react";
import TaskExpansion from "./TaskExpansion";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fas);

const TaskAdder = (props) => {
  
  return (
    <div className="task__adder">
      <label htmlFor="adder__input" className="adder__label border-0">
        <FontAwesomeIcon icon="plus" />
      </label>
      <input
        type="text"
        className="adder__input"
        id="adder__input"
        placeholder="Add Task"
      />
      <button className="adder__option border-0">
        <FontAwesomeIcon icon="ellipsis-v" />
      </button>
      <TaskExpansion /* isExpanded={props.taskOption.isExpanded} */ />
    </div>
  );
};

export default TaskAdder;
