import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login";
import EventsCull from "./pages/EventsCull";
import Family from "./pages/Family";
import Report1 from "./pages/Report1";
import Report_Handout from "./pages/Report_Handout";

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
        <EventsCull />
        <Report1 />
        <Report_Handout />
      </div>
    </Router>
  );
}

export default App;
