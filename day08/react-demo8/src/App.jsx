import React, { Component } from 'react';

import { Route, Switch, Redirect} from 'react-router-dom';

// import {Detail} from './detail';
// import {Home} from './home';
import routes from './router/index';

class App extends Component {
  render() {
    return (
      <Switch>
        <Redirect from="/" to="/home" exact></Redirect>
        {/* <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/detail/:id" component={Detail}></Route> */}
        {
          routes.map((item, index) => {
            return <Route key={index} path={item.path} component={() => {
              return <item.component routes={item.children}></item.component>
            }}></Route>
            // return <RouteWithSubRoutes key={index} routes={item} />
          })
        }
      </Switch>
    );
  }
}

export default App;