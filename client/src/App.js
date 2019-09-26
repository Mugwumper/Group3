import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Family from "./pages/Family";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
          <Nav />
          <Route exact path="/" component={Family} />
          <Route path="/family" component={Family} />
      </div>
  </Router>      
  );
}

export default App;
