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
        {/* 如果需要用到重定向，那么都要写在Switch的里面 */}
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
      </Switch>
    </div>
  )
}

export default Params;

/* 传参：
    1. 动态路由的传参
    2. to属性加对象
    3. search传值，接受的时候可以考虑URLSearchParams
*/