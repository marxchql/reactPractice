import React, { Component } from 'react';
import { Switch, NavLink } from 'react-router-dom';

import RouteWithSubRoutes from '../components/a'

// import Mine from './mine/Mine';
// import Video from './video/Video';
// import Movie from './movie/Movie';


import './style.css';

class Home extends Component {
  render() {
    return (
      <>
        <Switch>
          {/* <Route path="/home/movie">
            <Movie></Movie>
          </Route>
          <Route path="/home/video">
            <Video></Video>
          </Route>
          <Route path="/home/mine">
            <Mine></Mine>
          </Route> */}
          {
            this.props.routes.map((item, index) => {
              // return <Route key={index} path={item.path} component={() => {
              //   return <item.component {...this.props} routes={item.children}></item.component>
              // }}></Route>
              return <RouteWithSubRoutes key={index} {...item} />
            })
          }
        </Switch>
        <nav>
          <li><NavLink to="/home/movie">电影</NavLink></li>
          <li><NavLink to="/home/video">小视频</NavLink></li>
          <li><NavLink to="/home/mine">我的</NavLink></li>
        </nav>
      </>
    );
  }
}

export default Home;