import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TaskCard = ({
  value: task,
  onUpdate: emitChange,
  onRemove: emitRemove,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [taskForEdit, setTaskForEdit] = useState(task);

  useEffect(() => setTaskForEdit(task), [task]);

  const handleUpdate = () => {
    emitChange(taskForEdit);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTaskForEdit(task);
    setIsEditing(false);
  };

  const isEditingClassList = isEditing ? " task-card--editing" : "";

  const isFavoriteClassList = taskForEdit.isFavorite ? " task-card--star" : "";

  return (
    <React.Fragment>
      <li className={`task-card${isEditingClassList + isFavoriteClassList}`}>
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
          className="task-card__edit"
          onChange={({ target: { value: title } }) =>
            setTaskForEdit((task) => ({ ...task, title }))
          }
          disabled={!isEditing}
        />
        <p title={taskForEdit.message}>{taskForEdit.message}</p>
        <div className="task-card__end">
          <span className="widget-group">
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
            <button title="Edit" onClick={() => setIsEditing(() => !isEditing)}>
              <FontAwesomeIcon icon={["far", "edit"]} />
            </button>
            <button title="Delete" onClick={emitRemove}>
              <FontAwesomeIcon icon={["far", "trash-alt"]} />
            </button>
          </span>
          <span className="deadline-info">
            {taskForEdit.date} {taskForEdit.time}
          </span>
        </div>
      </li>
      <div
        className={`task-detail${isEditing ? " task-detail--expanded" : ""}`}
      >
        <div className="task-detail__body">
          <label className="task-detail__label">
            <FontAwesomeIcon icon={["far", "calendar-alt"]} />
            Deadline
          </label>
          <div className="task-detail__deadline">
            <input
              type="date"
              name="date"
              className="task-detail__date"
              value={taskForEdit.date}
              onChange={({ target: { value: date } }) =>
                setTaskForEdit((task) => ({ ...task, date }))
              }
            />
            <input
              type="time"
              name="time"
              className="task-detail__time"
              value={taskForEdit.time}
              onChange={({ target: { value: time } }) =>
                setTaskForEdit((task) => ({ ...task, time }))
              }
            />
          </div>
          <label className="task-detail__label">
            <FontAwesomeIcon icon={["far", "file"]} />
            File
          </label>
          <label
            className="task-detail__file"
            style={{ display: "inline-block", height: 32 }}
          >
            <FontAwesomeIcon icon={["fas", "plus"]} />
            <input type="file" name="file" className="file__input" />
          </label>
          <label className="task-detail__label">
            <FontAwesomeIcon icon={["far", "comment-dots"]} />
            Message
          </label>
          <textarea
            name="message"
            className="task-detail__description"
            placeholder="Type your task here..."
            value={taskForEdit.message}
            onChange={({ target: { value: message } }) =>
              setTaskForEdit((task) => ({ ...task, message }))
            }
          ></textarea>
        </div>
        <div className="task-detail__footer">
          <button
            className="task-detail__action--danger"
            onClick={handleCancel}
          >
            <FontAwesomeIcon icon={["fas", "times"]} />
            Cancel
          </button>
          <button
            className="task-detail__action--primary"
            onClick={handleUpdate}
          >
            <FontAwesomeIcon icon={["fas", "check"]} />
            Update
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TaskCard;
