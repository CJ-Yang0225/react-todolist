import React, { useState, useEffect } from "react";

const defaultTabClassList = ["navbar__link"];
const activatedTabClassList = ["navbar__link--active"];
const taskStatuses = ["All Tasks", "Processing", "Completed"];

/**
 * @param {boolean} isActive
 */
const withActivatedTabClassList = (isActive) =>
  isActive ? activatedTabClassList : [];

const TaskNavbar = () => {
  const [activatedTabIndex, setActivatedTabIndex] = useState(0);

  /**
   * @param {string} taskStatus
   * @param {number} index
   */
  const toNavbarTab = (taskStatus, index) => {
    const isTabActive = index === activatedTabIndex;

    const className = defaultTabClassList
      .concat(withActivatedTabClassList(isTabActive))
      .join(" ");

    const handleClick = (e) => {
      e.preventDefault();
      setActivatedTabIndex(index);
    };

    return (
      <a
        key={index}
        href="/#"
        className={className}
        onClick={handleClick}
      >
        {taskStatus}
      </a>
    );
  };

  const navbarTabs = taskStatuses.map(toNavbarTab);

  return (
    <nav className="task__navbar">
      <div className="navbar__tabs">{navbarTabs}</div>
    </nav>
  );
};

// const propsForNavbarTabs = [
//   { id: 1, text: "All Tasks" },
//   { id: 2, text: "Processing" },
//   { id: 3, text: "Completed" },
// ];

// const TaskNavbar = () => {
//   const [navbarID, setNavbarID] = useState(0);

//   const categoryLinks = propsForNavbarTabs.map((link, index) => {
//     const activeStyle = navbarID === index ? "navbar__link--active" : "";
//     const className = ["navbar__link", activeStyle].join(" ");

//     return (
//       <a
//         key={index}
//         href="/#"
//         className={className}
//         onClick={() => setNavbarID(index)}
//       >
//         {link.text}
//       </a>
//     );
//   });

//   return (
//     <nav className="task__navbar">
//       <div className="navbar__tabs">{categoryLinks}</div>
//     </nav>
//   );
// };

export default TaskNavbar;
