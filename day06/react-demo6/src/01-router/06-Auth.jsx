import React, { Component } from 'react';

import { Route, Link, Switch, Redirect } from 'react-router-dom';

function PublicPage() {
  return <h3>Public</h3>;
}

function ProtectedPage() {
  return <h3>Protected</h3>;
}

// function LoginPage() {
//   return <h3>Login</h3>;
// }
class LoginPage extends Component {
  handleClick = () => {
    let history = this.props.history
    localStorage.setItem('LoginInfo', 87876)
    history.push('/protected')
    // 编程式导航
  }

  render() {
    // console.log(this)
    // let history = this.props.history
    return (
      <>
        <h3>Login</h3>
        <button onClick={this.handleClick}>bth</button>
      </>
    )
  }
}

function PrivateRoute() {
  return (
    <Route 
      path="/protected" 
      render={() => {
        // 判断是否已经登录
        return (
          localStorage.getItem('LoginInfo') ? 
          <ProtectedPage></ProtectedPage> : 
          <Redirect from="/protected" to="/login"></Redirect>
        )
      }}>
    </Route>
  )
}

export default function AuthExample() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/public">Public Page</Link>
        </li>
        <li>
          <Link to="/protected">Protected Page</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/public">
          <PublicPage />
        </Route>
        <Route path="/login" component={LoginPage}></Route>
        {/* <Route path="/protected">
          <ProtectedPage />
        </Route> */}
        <PrivateRoute></PrivateRoute>
      </Switch>
    </div>
  );
}