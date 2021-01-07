import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const isValidTask = ({ title, date, time }) => title && date && time;

const initialTask = {
  title: "",
  date: "",
  time: "",
  message: "",
  isDone: false,
  isFavorite: false
};

const TaskCreateForm = ({ onCreate: emitCreate }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const [task, setTask] = useState(initialTask);

  const resetTask = () => setTask(initialTask);

  const toggleDetail = () => setIsExpanded((isExpanded) => !isExpanded);

  const handleCreate = () => {
    if (!isValidTask(task)) {
      alert("請輸入 Task 和 Deadline");
      return;
    }

    emitCreate(task);
    resetTask();
  };

  const handleCancel = () => {
    resetTask();
    setIsExpanded(false);
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
        autoComplete="off"
        value={task.title}
        onChange={({ target: { value: title } }) =>
          setTask((task) => ({ ...task, title }))
        }
      />
      <button className="adder__option border-0" onClick={toggleDetail}>
        <FontAwesomeIcon icon="ellipsis-v" />
      </button>
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
              value={task.date}
              onChange={({ target: { value: date } }) =>
                setTask((task) => ({ ...task, date }))
              }
            />
            <input
              type="time"
              name="time"
              className="time__input"
              value={task.time}
              onChange={({ target: { value: time } }) =>
                setTask((task) => ({ ...task, time }))
              }
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
            value={task.message}
            onChange={({ target: { value: message } }) =>
              setTask((task) => ({ ...task, message }))
            }
          ></textarea>
        </div>
        <div className="detail__footer">
          <button className="cancel--danger" onClick={handleCancel}>
            <FontAwesomeIcon icon={["fas", "times"]} />
            Cancel
          </button>
          <button className="save--primary" onClick={handleCreate}>
            <FontAwesomeIcon icon={["fas", "plus"]} />
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCreateForm;
