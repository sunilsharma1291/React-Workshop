import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute  } from 'react-router'

import App from './components/App.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';


ReactDOM.render((
   <Router history = {browserHistory}>
      <Route path = "/" component = {App}>
         <IndexRoute path = "home" component = {Home} />
         <Route path = "home" component = {Home} />
         <Route path = "about(/:article)" component = {About} />
         <Route path = "contact" component = {Contact} />
      </Route>
   </Router>
	
), document.getElementById('container'))