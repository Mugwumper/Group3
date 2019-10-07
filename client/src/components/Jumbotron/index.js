import React from "react";

function Jumbotron({ children }) {
  return (
    <div
    //style={{ height: 100, clear: "both", paddingTop: 30, textAlign: "center" }}
    style={{ height: 100, clear: "both", paddingTop: 15 }}
    className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
