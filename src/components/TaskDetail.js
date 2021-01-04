import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TaskDetail = ({ title, expanded: isExpanded }) => {
  const [latestTask, setLatestTask] = useState({
    title,
    date: "",
    time: "",
    message: "",
  });

  const handleTask = (event) => {
    const target = event.target;

    const inputValue = target.value;

    const inputName = target.name;

    setLatestTask((prevTasks) => ({...prevTasks, title, [inputName]:inputValue}))
  };

  const submitLatestTask = () => {
    const taskList = JSON.parse(localStorage.getItem('taskList')) || [];
    taskList.push(latestTask);
    localStorage.setItem("taskList", JSON.stringify(taskList));
    console.log(taskList);
  };

  useEffect(()=> {
    setLatestTask((prevTasks) => ({...prevTasks, title}));
  }, [title])

  return (
    <div
      className={`task__detail${isExpanded ? " task__detail--expanded" : ""}`}
    >
      <div className="detail__body">
        <label className="detail__body__label">
          <FontAwesomeIcon icon={["far", "calendar-alt"]} />
          Deadline
        </label>
        <div className="detail__body__deadline">
          <input
            type="date"
            name="date"
            className="date__input"
            value={latestTask.date}
            onChange={handleTask}
          />
          <input
            type="time"
            name="time"
            className="time__input"
            value={latestTask.time}
            onChange={handleTask}
          />
        </div>
        <label className="detail__body__label">
          <FontAwesomeIcon icon={["far", "file"]} />
          File
        </label>
        <label
          className="detail__body__file"
          style={{ display: "inline-block", height: 32 }}
        >
          <FontAwesomeIcon icon={["fas", "plus"]} />
          <input type="file" name="file" className="file__input" />
        </label>
        <label className="detail__body__label">
          <FontAwesomeIcon icon={["far", "comment-dots"]} />
          Message
        </label>
        <textarea
          name="message"
          className="detail__body__description"
          placeholder="Type your task here..."
          value={latestTask.message}
          onChange={handleTask}
        ></textarea>
      </div>
      <div className="detail__footer">
        <button className="cancel--danger">
          <FontAwesomeIcon icon={["fas", "times"]} />
          Cancel
        </button>
        <button className="save--primary" onClick={submitLatestTask}>
          <FontAwesomeIcon icon={["fas", "plus"]} />
          Save
        </button>
      </div>
    </div>
  );
};

export default TaskDetail;
