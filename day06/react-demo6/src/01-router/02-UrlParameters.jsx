import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

const Home = (props) => <div>Home{ props.match.params.id }</div>
// class Home extends Component {
//   render () {
//     console.log(this.props.match.params.id)
//     return <div>home { this.props.match.params.id }</div>
//   }
// }

class UrlParameters extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/aaa">aaa</Link></li>
          <li><Link to="/bbb">bbb</Link></li>
          <li><Link to="/ccc">ccc</Link></li>
        </ul>
        <Route path="/:id" component={Home}></Route>
      </div>
    );
  }
}

export default UrlParameters;