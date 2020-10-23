import React from 'react';

import {Route, Switch, Link, Redirect, useParams, useLocation} from 'react-router-dom';

const Home = () => {
  // console.log(useLocation())
  let {state: {id}} = useLocation()
  return (
  <div>home {id}</div>
  )
}

const About = () => {
  // console.log(props)
  // console.log(useParams())
  // 拿到的就是props下面的history的信息
  let { id } = useParams()
  return (
    <div>About {id}</div>
  )
}

const Search = () => {
  // console.log(useLocation())
  const search = new URLSearchParams(useLocation().search)
  const id = search.get('id')
  return (
    <div>search { id }</div>
  )
}

const NotFonud = () => {
  return (
    <div>404 not found.</div>
  )
}


const Params = () => {
  return (
    <div>
      <ul>
        <li><Link to={{
          pathname: '/home',
          state: {id: 20}
        }}>home</Link></li>
        <li><Link to="/about/10">about</Link></li>
        <li><Link to="/search?id=30">search</Link></li>
      </ul>
      <Switch>
        <Redirect exact from="/" to="/home"></Redirect>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/about/:id">
          <About></About>
        </Route>
        <Route path="/search">
          <Search></Search>
        </Route>
        {/* not Match 404    一定要写在Switch */}
        <Route path="*">
          <NotFonud></NotFonud>
        </Route>
      </Switch>
    </div>
  )
}

export default Params;