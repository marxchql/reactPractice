import React, { Component } from 'react';

import { Route, Link, Switch } from 'react-router-dom';

const Home = () => <div>Home</div>
// const About = () => <div>About</div>
class About extends Component {
  render() {
    console.log(this)
    return <div>About</div>
  }
}
const Dashboard = (props) => {
  console.log(props)
  return (
    <div>Dashboard</div>
  )
}


class Basic extends Component {
  render() {
    return (
      <>
        <ul>
          <li><Link to="/">home</Link></li>
          <li><Link to="/about">about</Link></li>
          <li><Link to="/dashboard">dashboard</Link></li>
          <li><Link to="/other">other</Link></li>
        </ul>
        <hr/>
        <Switch>
          {/* component是可渲染类组件 */}
          <Route path="/" exact component={Home}></Route>
          {/* render属性只能渲染函数组件 */}
          <Route path="/about" render={(props) => <About {...props}></About>}></Route>
          {/* children属性不管路径有没有匹配，都会被渲染, 不能使用类组件 */}
          <Route path="/dashboard" children={Dashboard}></Route>
          {/* 允许放类组件和函数组件 */}
          <Route path="/other"><About></About></Route>
        </Switch>
      </>
    );
  }
}

export default Basic;