import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Home } from './home/';
import { Router, Switch, Route } from 'react-router-dom';
import { history } from './_helpers';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
