import React, { useState, useEffect } from "react";

const navbarTabs = [
  { id: 1, text: "All Tasks" },
  { id: 2, text: "Processing" },
  { id: 3, text: "Completed" },
];

const TaskNavbar = () => {
  const [navbarID, setNavbarID] = useState(0);

  const listItems = navbarTabs.map((link, index) => {
    let className = "navbar__link";
    if (navbarID === index) className += " navbar__link--active";

    return (
      <a
        key={index}
        href="/#"
        className={className}
        onClick={() => setNavbarID(index)}
      >
        {link.text}
      </a>
    );
  });

  return (
    <nav className="task__navbar">
      <div className="navbar__tabs">{listItems}</div>
    </nav>
  );
};

export default TaskNavbar;
