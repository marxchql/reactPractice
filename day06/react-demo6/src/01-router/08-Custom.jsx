import React, { Component } from 'react';

// withRouter是一个高阶组件，withRouter处理过的组件，就将拥有路由信息
import { Route, Switch, withRouter } from 'react-router-dom';

const Home = () => <div>Home</div>
const About = () => <div>About</div>
const Dashboard = () => <div>Dashboard</div>

class MyNavLink extends Component {
  state = {
    navList: ['home', 'about', 'dashboard']
    // activeIndex: 0
  }

  handleClick = item => {
    return () => {
      // console.log(this)
      // this.setState({
      //   activeIndex: index
      // })
      let {history} = this.props
      history.push('/' + item)
    }
  }

  render() {
    let pathname = this.props.location.pathname
    return (
      <>
        {
          this.state.navList.map((item, index) => {
            return (
              // true ? <li key={index}>&gt;{item}</li> : <li key={index}>{item}</li>
              <li key={index} onClick={this.handleClick(item)}>
                {pathname === '/' + item ? '>' : '' }{item}
              </li>
            )
          })
        }
      </>
    )
  }
}

const NewMyNavLink = withRouter(MyNavLink)

class Basic extends Component {
  render() {
    return (
      <>
        <ul>
          {/* <li><Link to="/home">home</Link></li>
          <li><Link to="/about">about</Link></li>
          <li><Link to="/dashboard">dashboard</Link></li> */}
          <NewMyNavLink></NewMyNavLink>
        </ul>
        <hr/>
        <Switch>
          <Route path="/home" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/dashboard" component={Dashboard}></Route>
        </Switch>
      </>
    );
  }
}

export default Basic;