import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TaskCard = ({
  value: task,
  onChange: emitChange,
  onRemove: emitRemove
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [taskForEdit, setTaskForEdit] = useState(task);

  useEffect(() => setTaskForEdit(task), [task]);

  const handleChange = () => {
    emitChange(taskForEdit);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTaskForEdit(task);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="task__cardList">
        <li className="task__card">
          <input
            type="checkbox"
            title="isDone"
            checked={taskForEdit.isDone}
            onChange={({ target: { checked: isDone } }) =>
              emitChange({ ...task, isDone })
            }
          />
          <input
            type="text"
            title={taskForEdit.title}
            value={taskForEdit.title}
            name="title"
            className="card__edit__input"
            onChange={({ target: { value: title } }) =>
              setTaskForEdit((task) => ({ ...task, title }))
            }
          />
          <p title={taskForEdit.message}>{taskForEdit.message}</p>
          <div className="card__end">
            <span className="widgetGroup">
              <button
                title="Star Favorite"
                onClick={() =>
                  emitChange({ ...task, isFavorite: !taskForEdit.isFavorite })
                }
              >
                <FontAwesomeIcon
                  icon={[taskForEdit.isFavorite ? "fas" : "far", "star"]}
                />
              </button>
              <button title="Edit" onClick={() => setIsEditing(true)}>
                <FontAwesomeIcon icon={["far", "edit"]} />
              </button>
              <button title="Delete" onClick={emitRemove}>
                <FontAwesomeIcon icon={["far", "trash-alt"]} />
              </button>
            </span>
            <span className="deadlineInfo">
              {taskForEdit.date} {taskForEdit.time}
            </span>
          </div>
        </li>
        <div
          className={`task__detail${
            isEditing ? " task__detail--expanded" : ""
          }`}
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
                value={taskForEdit.date}
                onChange={({ target: { value: date } }) =>
                  setTaskForEdit((task) => ({ ...task, date }))
                }
              />
              <input
                type="time"
                name="time"
                className="time__input"
                value={taskForEdit.time}
                onChange={({ target: { value: time } }) =>
                  setTaskForEdit((task) => ({ ...task, time }))
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
              value={taskForEdit.message}
              onChange={({ target: { value: message } }) =>
                setTaskForEdit((task) => ({ ...task, message }))
              }
            ></textarea>
          </div>
          <div className="detail__footer">
            <button className="cancel--danger" onClick={handleCancel}>
              <FontAwesomeIcon icon={["fas", "times"]} />
              Cancel
            </button>
            <button className="save--primary" onClick={handleChange}>
              <FontAwesomeIcon icon={["fas", "check"]} />
              Update
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="task__cardList">
        <li className="task__card">
          <input
            type="checkbox"
            title="isDone"
            checked={taskForEdit.isDone}
            onChange={({ target: { checked: isDone } }) =>
              emitChange({ ...task, isDone })
            }
          />
          <input
            type="text"
            title={taskForEdit.title}
            value={taskForEdit.title}
            name="title"
            className="card__edit__input"
            disabled
          />
          <p title={taskForEdit.message}>{taskForEdit.message}</p>
          <div className="card__end">
            <span className="widgetGroup">
              <button
                title="Star Favorite"
                onClick={() =>
                  emitChange({ ...task, isFavorite: !taskForEdit.isFavorite })
                }
              >
                <FontAwesomeIcon
                  icon={[taskForEdit.isFavorite ? "fas" : "far", "star"]}
                />
              </button>
              <button title="Edit" onClick={() => setIsEditing(true)}>
                <FontAwesomeIcon icon={["far", "edit"]} />
              </button>
              <button title="Delete" onClick={emitRemove}>
                <FontAwesomeIcon icon={["far", "trash-alt"]} />
              </button>
            </span>
            <span className="deadlineInfo">
              {taskForEdit.date} {taskForEdit.time}
            </span>
          </div>
        </li>
      </div>
    );
  }
};

export default TaskCard;
