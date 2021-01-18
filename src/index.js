import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import './index.css';

import Home from './components/home/Home';
import contacto from './components/form/contacto';
import aboutUs from './components/about_us/about_us';
import PPrivacidad from './components/politicas/privacidad';

import * as serviceWorker from './serviceWorker';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'

ReactDOM.render(
  <Router>
    <div>
      <Switch>
        {}
        <Route exact path='/' component={Home}/>
        <Route exact path='/sobreNosotros' component={aboutUs}/>
        <Route exact path='/contacto' component={contacto}/>
        <Route exact path='/politica-de-privacidad' component={PPrivacidad}/>
      </Switch>
    </div>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
