import { render } from "react-dom";
import React from "react";
import App from "./components/App.js";

const containerEl = document.getElementById("container");

render(
  <App/>,
  containerEl
);
