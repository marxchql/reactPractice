import React, { Component } from 'react';

import { Route, Link, Redirect } from 'react-router-dom';

const Home = () => <div>Home</div>
class About extends Component {
  render() {
    return <div>About</div>
  }
}

class Redirect1 extends Component {
  state = {  }
  render() {
    return (
      <div>
        <Link to="/home">home</Link>
        <Link to="/about">about</Link>

        <Route path="/home"><Home></Home></Route>
        <Route path="/about"><About></About></Route>
        <Redirect from="/" to="/home"></Redirect>
      </div>
    );
  }
}

export default Redirect1;