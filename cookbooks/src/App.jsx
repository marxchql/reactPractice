import React, { Component } from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

import Home from 'home/Home';
import {Detail} from './detail'

class App extends Component {
  render() {
    return (
      <div>
        {/* <Home></Home> */}
        <Switch>
          <Redirect from="/" to="/home" exact></Redirect>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/detail/:id">
            <Detail></Detail>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
