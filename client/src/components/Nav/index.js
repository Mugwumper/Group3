import React from "react";
import { NavLink } from 'react-router-dom';
import { fb } from "../../firebase";
import { AuthContext } from "../../App";

function Nav() {
  const isLogged = React.useContext(AuthContext).isLogged;
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
      <a className="navbar-brand" href="/">
        Family Reunion Helper
      </a>  
      {isLogged ? null :  <NavLink to="/signup">Sign Up</NavLink> }
      {isLogged ? null :  <NavLink to="/login">Login</NavLink> }

      <NavLink to="/add">Family</NavLink>
      <NavLink to="/cull">Cull Events</NavLink>
      <NavLink to="/reportanswerkey">Report Answer Key</NavLink>
      <NavLink to="/reporthandout">Report Handout</NavLink>

      {isLogged ? 
        <button className="navbar-bandaid" onClick={
          () => fb.auth().signOut()
        }> logout</button>
        :  null 
      }
    </nav>
  );
}

export default Nav;
