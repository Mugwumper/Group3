import React from "react";
import { NavLink } from 'react-router-dom';

import { fb } from "../../firebase";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
      <a className="navbar-brand" href="/">
        Family Reunion Helper
      </a>
      <NavLink to="/signup">Sign Up</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/add">Family</NavLink>

      <button className="navbar-bandaid" onClick={() => fb.auth().signOut()}>
        logout
      </button>
    </nav>
  );
}

export default Nav;
