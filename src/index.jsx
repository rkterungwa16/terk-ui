import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import { MultiToast, Child } from "./Toast/Toast";
// import { Example } from "./Transition/Slide";
import { ExampleGrid } from "./Examples/Grid";
import SidebarExample from "./Examples/Sidebar";
import * as serviceWorker from "./serviceWorker";
import "./App.css";

ReactDOM.render(
  <React.StrictMode>
    <SidebarExample />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
