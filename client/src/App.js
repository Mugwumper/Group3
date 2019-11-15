import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import EventsCull from "./pages/EventsCull";
import Family from "./pages/Family";
import ReportAnswerKey from "./pages/ReportAnswerKey";
import ReportHandout from "./pages/ReportHandout";
import Nav from "./components/Nav";
import { fb } from "./utils/firebase";

export let userEmail = "";
export const AuthContext = React.createContext(null);

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
  }, []); 
  return (
    <AuthContext.Provider value={{ isLogged, setIsLogged }}>
      <Router>
        <div>
          <Nav />
          <div className="page__content-container">
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={Login} />          
            <Route exact path="/add" component={Family} />
            <Route extract path="/cull" component={EventsCull} /> 
            <Route exact path="/reportanswerkey" component={ReportAnswerKey} />
            <Route exact path="/reporthandout" component={ReportHandout} />
          </div>
        </div>
      </Router> 
    </AuthContext.Provider>    
  );
} 

export default App;
