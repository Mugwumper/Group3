import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login";

import Family from "./pages/Family";
import Report1 from "./pages/Report1";
//import Detail from "./pages/Detail";
//import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Login />
        <Route exact path="/" component={Family} />
        <Route path="/family" component={Family} />
        <Report1 />
      </div>
    </Router>
  );
}

export default App;
