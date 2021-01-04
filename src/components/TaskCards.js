import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TaskCards = () => {
  const [taskList, setTaskList] = useState(() =>
    JSON.parse(localStorage.getItem("taskList"))
  );

  useEffect(() => {
    const currentTasks = JSON.parse(localStorage.getItem("taskList"));
    setTaskList(currentTasks);
  }, [localStorage.getItem("taskList")]);

  const taskGenerator = (tasks) => {
    return tasks.map(({ title, date, time, message }, index) => (
      <div className="task__cardList">
        <li className="task__card" id={`task${index}`}>
          <input type="checkbox" title="isDone" />
          <input
            type="text"
            title={title}
            value={title}
            name="title"
            className="card__edit__input"
          />
          <p>{message}</p>
          <p>{`${date} ${time}`}</p>
          <span className="widgetGroup">
            <button title="Star Favorite">
              <FontAwesomeIcon icon={["far", "star"]} />
            </button>
            <button title="Edit">
              <FontAwesomeIcon icon={["far", "edit"]} />
            </button>
            <button title="Delete">
              <FontAwesomeIcon icon={["far", "trash-alt"]} />
            </button>
          </span>
        </li>
      </div>
    ));
  };

  return <>{taskGenerator(taskList)}</>;
};

export default TaskCards;
