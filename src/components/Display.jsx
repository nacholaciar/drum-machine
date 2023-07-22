import React from "react";
import "./Display.css";

const Display = ({ text }) => (
  <div id="display" className="bg-dark text-light rounded p-2">
    <h4>{text}</h4>
  </div>
);

export default Display;
