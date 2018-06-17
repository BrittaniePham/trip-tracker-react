import React, { Component, Fragment } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Trips from './components/Trips';
import Trip from './components/Trip';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Trips} />
          <Route exact path="/trips/:id" component={Trip} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;

//setting urls