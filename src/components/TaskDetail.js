import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TaskDetail = ({ expanded: isExpanded }) => {
  return (
    <div className="task__expansion" style={{ display: isExpanded ? '' : 'none' }}>
      <div className="expansion__body">
        <label className="expansion__body__label">
          <FontAwesomeIcon icon={["far", "calendar-alt"]} />
          Deadline
        </label>
        <div className="expansion__body__date">
          <input type="date" name="date" className="date__input" />
          <input type="time" name="time" className="time__input" />
        </div>
        <label className="expansion__body__label">
          <FontAwesomeIcon icon={["far", "file"]} />
          File
        </label>
        <label className="expansion__body__label">
          <div className="expansion__body__file">
            <FontAwesomeIcon icon={["fas", "plus"]} />
            <input type="file" name="file" className="file__input" />
          </div>
        </label>
        <label className="expansion__body__label">
          <FontAwesomeIcon icon={["far", "message-dots"]} />
          Message
        </label>
        <textarea
          name="message"
          className="expansion__body__description"
          placeholder="Type your task here..."
        ></textarea>
      </div>
      <div className="expansion__footer">
        <button className="cancel--danger">
          <FontAwesomeIcon icon={["fas", "times"]} />
          Cancel
        </button>
        <button className="update--primary">
          <FontAwesomeIcon icon={["fas", "plus"]} />
          Update
        </button>
      </div>
    </div>
  );
};

export default TaskDetail;
