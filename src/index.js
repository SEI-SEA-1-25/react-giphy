import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./Home";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Home />
    <h1>Hello, from index</h1>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
