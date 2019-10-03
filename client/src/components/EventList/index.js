import React from "react";
import "./style.css";

//// EVENT LIST COMPONENTS /////

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
export function CheckBox(props) { // unused
  return (
    <input type="checkbox" />
  );
}

export function EList({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function EListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}


