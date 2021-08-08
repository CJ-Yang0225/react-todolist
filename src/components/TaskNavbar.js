import React from "react";

const defaultTabClassList = ["task-navbar__link"];
const activatedTabClassList = ["task-navbar__link--active"];
const filterTypes = ["All", "Processing", "Completed"];

const labelByFilterType = {
  All: "All Tasks",
  Processing: "Processing",
  Completed: "Completed",
};

const withActivatedTabClassList = (isActive) =>
  isActive ? activatedTabClassList : [];

const TaskNavbar = ({
  value: activatedFilterType,
  onChange: emitChange,
}) => {
  const renderTab = (filterType, index) => {
    const isActive = filterType === activatedFilterType;

    const label = labelByFilterType[filterType];

    const className = defaultTabClassList
      .concat(withActivatedTabClassList(isActive))
      .join(" ");

    const handleClick = (event) => {
      event.preventDefault();
      emitChange(filterType);
    };

    return (
      <a key={index} href="/#" className={className} onClick={handleClick}>
        {label}
      </a>
    );
  };

  const tabs = filterTypes.map(renderTab);

  return (
    <nav className="task-navbar">
      <div className="task-navbar__tabs">{tabs}</div>
    </nav>
  );
};

export default TaskNavbar;
