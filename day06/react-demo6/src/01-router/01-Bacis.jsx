import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const Home = () => <div>Home</div>
const About = () => <div>About</div>
const Dashboard = () => <div>Dashboard</div>

class Basic extends Component {
  render() {
    return (
      // 如果要使用路由，所有的内容都要放在BrowserRouter组件中
      <Router>
        <ul>
          <li><Link to="/">home</Link></li>
          <li><Link to="/about">about</Link></li>
          <li><Link to="/dashboard">dashboard</Link></li>
        </ul>
        <hr/>
        {/* switch分支匹配, 排他性路由 */}
        {/* 不加switch的叫包容性路由 */}
        <Switch>
          {/* Route组件表示每一个路由 */}
          <Route path="/about" component={About}></Route>
          <Route path="/dashboard" component={Dashboard}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </Router>
    );
  }
}

export default Basic;