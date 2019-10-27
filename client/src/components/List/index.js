import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div className="list-overflow-container"
          style={getStyle_basicList}>
      <ul className="list-group">{children}</ul>
    </div>
  );
}

const getStyle_basicList = {
  border: '1px #DDDDDD solid',
  overflowY: "scroll"
}

export function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}

export function EList({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group list-group-flush">{children}</ul>
    </div>
  );
}

export function EListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}

export function RList({ children }) {
  return (
    <div className="list-group">
      <div className="list-group-item-action active">{children}</div>
    </div>
  );
}

export function RListItem({ children }) {
  return <div className="list-group-item list-group-item-action">{children}</div>;
}
