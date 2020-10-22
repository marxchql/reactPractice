import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

const Home = () => <div>Home</div>

const Rendering = () => <div>Rendering.</div>
const Components = () => <div>Components.</div>
const PropsAndState = () => <div>PropsAndState.</div>

const Topics = (props) => {
  // console.log(props)
  const { url } = props.match
  return (
    <>
      <h1>Topics</h1>
      <hr/>
      <ul>
        <li><Link to={`${url}/rendering`}>Rendering</Link></li>
        <li><Link to={`${url}/components`}>Components</Link></li>
        <li><Link to={`${url}/propsAndState`}>PropsAndState</Link></li>
      </ul>
      <Switch>
        <Route path={`${url}/rendering`} component={Rendering}></Route>
        <Route path={`${url}/components`} component={Components}></Route>
        <Route path={`${url}/propsAndState`} component={PropsAndState}></Route>
      </Switch>
    </>
  )
}

class Nesting extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">home</Link></li>
          <li><Link to="/topics/rendering">topics</Link></li>
        </ul>

        <hr/>

        {/* Vue-router是排他性路由，react默认是包容性路由 */}
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/topics" component={Topics}></Route>
        </Switch>
      </div>
    );
  }
}

export default Nesting;