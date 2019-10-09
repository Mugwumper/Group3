import React from "react";
import "./style.css";

function Jumbotron({ children }) {
  return (
    <div
    style={{ height: 100, clear: "both", paddingTop: 15 }}
    className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
