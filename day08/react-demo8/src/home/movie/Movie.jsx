import React, { Component } from 'react';
import { Link, Switch} from 'react-router-dom';
import RouteWithSubRoutes from '../../components/a'

// import Hot from './hot/Hot'

class Movie extends Component {
  render() {
    return (
      <>
        <div style={{
          width: '100%',
          height: '200px',
          background: 'pink'
        }}></div>
        <ul>
          <li><Link to="/home/movie/hot">热门</Link></li>
        </ul>
        <Switch>
          {/* <Route path="/home/movie/hot" component={Hot}></Route> */}
          {
            this.props.routes.map((item, index) => {
              // return <Route key={index} path={item.path} component={() => {
              //   return <item.component routes={item.children}></item.component>
              // }}></Route>
              return <RouteWithSubRoutes key={index} {...item} />
            })
          }
        </Switch>
      </>
    );
  }
}

export default Movie;