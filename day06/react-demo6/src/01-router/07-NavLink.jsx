import React, { Component } from 'react';

// 如果导航的高亮，需要用到NavLink,来代替Link
import { Route, NavLink, Switch } from 'react-router-dom';
import "./style.css";

const Home = () => <div>Home</div>
const About = () => <div>About</div>
const Dashboard = () => <div>Dashboard</div>


class Basic extends Component {
  render() {
    return (
      <>
        <ul>
          <li><NavLink to="/" exact>home</NavLink></li>
          <li><NavLink to="/about">about</NavLink></li>
          <li><NavLink to="/dashboard">dashboard</NavLink></li>
        </ul>
        <hr/>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/dashboard" component={Dashboard}></Route>
        </Switch>
      </>
    );
  }
}

export default Basic;