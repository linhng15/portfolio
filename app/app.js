// Include the Main React Dependencies
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory, browserHistory } from "react-router";


// Reference the high-level components
import About from "./pages/About";
import Application from "./pages/Application";
import Main from "./pages/Main";
import Resume from "./pages/Resume";

const app = document.getElementById('app');

ReactDOM.render(
    <Router history={hashHistory}>
	    <Route path="/" component={Main}>
	    	<IndexRoute component={About}></IndexRoute>
	    	<Route path="application" name="application" component={Application}></Route>
	    	<Route path="resume" name="resume" component={Resume}></Route>
	    </Route>
    </Router>,
app);




