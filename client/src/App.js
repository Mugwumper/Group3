import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
//import EventsCull from "./pages/EventsCull";
import Family from "./pages/Family";
import ReportAnswerKey from "./pages/ReportAnswerKey";
//import ReportHandout from "./pages/ReportHandout";
//import Detail from "./pages/Detail";
//import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import {fb} from "./firebase";

export let userEmail = "";

function App() {
  const [isLogged, setIsLogged] = React.useState(false);
  React.useEffect(() => {
    fb.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log(user);
        setIsLogged(true);
        userEmail = user.email;
        console.log("isLogged: " + isLogged + " userEmail:'" + userEmail + "'")
      } else {
        console.log("user logged out!");
        setIsLogged(false);
        userEmail = "";
      }
    });
  });
  return (
    <Router>
      <div>
        <Nav />
        <div className="page__content-container">
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />          
          {/* <Route exact path="/" component={Family} />
          <Route path="/family" component={Family} /> */}
          <Route exact path="/add" component={Family} />
          {/* <FamilyReview />
          <EventsCull /> */}
          <Route exact path="/reportanswerkey" component={ReportAnswerKey} />
          {/* <ReportHandout /> */}
        </div>
      </div>
    </Router>    
  );
} 

export default App;
