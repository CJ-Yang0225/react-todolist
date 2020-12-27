import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.min.css";
import TaskNavbar from "./components/TaskNavbar";
import TaskAdder from "./components/TaskAdder";

ReactDOM.render(
  <React.StrictMode>
    <header>
      <TaskNavbar />
    </header>
    <main className="container main">
      <TaskAdder />
    </main>
  </React.StrictMode>,
  document.getElementById("root")
);
