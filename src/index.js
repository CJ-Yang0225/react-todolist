import React from "react";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import "./styles/index.min.css";
import TaskNavbar from "./components/TaskNavbar";
import TaskAdder from "./components/TaskAdder";

library.add(fas, far);

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
