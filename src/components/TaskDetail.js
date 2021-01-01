import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TaskDetail = ({ expanded: isExpanded }) => {
  return (
    <div className="task__detail" style={{ display: isExpanded ? "" : "none" }}>
      <div className="detail__body">
        <label className="detail__body__label">
          <FontAwesomeIcon icon={["far", "calendar-alt"]} />
          Deadline
        </label>
        <div className="detail__body__deadline">
          <input type="date" name="date" className="date__input" />
          <input type="time" name="time" className="time__input" />
        </div>
        <label className="detail__body__label">
          <FontAwesomeIcon icon={["far", "file"]} />
          File
        </label>
        <label className="detail__body__file" style={{display: "inline-block", height: 32}}>
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
        ></textarea>
      </div>
      <div className="detail__footer">
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
