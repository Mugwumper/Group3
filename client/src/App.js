import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login";
import EventsCull from "./pages/EventsCull";
import FamilyAdd from "./pages/FamilyAdd";
import FamilyReview from "./pages/FamilyReview";
import ReportAnswerKey from "./pages/ReportAnswerKey";
import ReportHandout from "./pages/ReportHandout";

//import Detail from "./pages/Detail";
//import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <div className="page__content-container">
          <Login />
          {/* <Route exact path="/" component={Family} />
          <Route path="/family" component={Family} /> */}
          <FamilyAdd />
          <FamilyReview />
          <EventsCull />
          <ReportAnswerKey />
          <ReportHandout />
        </div>
      </div>
    </Router>
  );
}

export default App;
