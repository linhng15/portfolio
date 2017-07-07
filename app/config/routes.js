// React library
import React from "react";
// React-router module
import {router, Route, IndexRoute, hashHistory} from "react-router";

// Reference the high-level components
import About from "../components/About";
import Application from "../components/Application";
import Contact from "../components/Contact";
import Main from "../components";


// Export the Routes
module.exports = (

  // The high level component is the Router component
  <Router history={hashHistory}>
    <Route path="/" component={Main}>

      {/* If user selects Info or Chat show the appropriate component */}
      <Route path="about" component={About} />
      <Route path="contact" component={Contact} />

      {/* If user selects any other path... we get the Info Route */}
      <IndexRoute component={About} />

    </Route>
  </Router>

);
