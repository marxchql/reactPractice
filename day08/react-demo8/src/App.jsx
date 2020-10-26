import React, { Component } from 'react';

import {Switch, Redirect} from 'react-router-dom';

// import {Detail} from './detail';
// import {Home} from './home';
import routes from './router/index';
import RouteWithSubRoutes from './components/a'

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <Switch>
        <Redirect from="/" to="/home" exact></Redirect>
        {/* <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/detail/:id" component={Detail}></Route> */}
        {
          routes.map((item, index) => {
            // return <Route key={index} path={item.path} component={() => {
            //   return <item.component routes={item.children}></item.component>
            // }}></Route>
            return <RouteWithSubRoutes key={index} routes={item} />
          })
        }
      </Switch>
    );
  }
}

export default App;