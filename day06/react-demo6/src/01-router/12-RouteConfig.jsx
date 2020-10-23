import React from 'react';

import { 
  Route, 
  Link,
  Switch
} from 'react-router-dom';

const routes = [
  {
    path: "/sandwiches",
    component: Sandwiches
  },
  {
    path: "/tacos",
    component: Tacos,
    routes: [
      {
        path: "/tacos/bus",
        component: Bus
      },
      {
        path: "/tacos/cart",
        component: Cart
      }
    ]
  }
];

function Sandwiches() {
  return <h2>Sandwiches</h2>;
}

function Tacos({routes}) {
  // console.log(props)
  return (
    <div>
      <h2>Tacos</h2>
      <ul>
        <li>
          <Link to="/tacos/bus">Bus</Link>
        </li>
        <li>
          <Link to="/tacos/cart">Cart</Link>
        </li>
      </ul>

      {
        routes.map((route, index) => {
          return (
            // <Route key={index} path={route.path} render={() => <route.component></route.component>}>
            //   </Route>
            <RouteWithSubRoutes key={index} {...route}></RouteWithSubRoutes>
          )
        })
      }
    </div>
  );
}

function Bus() {
  return <h3>Bus</h3>;
}

function Cart() {
  return <h3>Cart</h3>;
}


function RouteWithSubRoutes (route) {
  return (
    <Route path={route.path} render={() => <route.component {...route}/>}></Route>
  )
}

export default () => {
  return (
    <>
      <ul>
        {
          routes.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.path}>
                  {item.path.slice(1)}
                </Link>
              </li>
            )
          })
        }
      </ul>

      <Switch>
        {
          routes.map((route, index) => {
            return (
              // <RouteWithSubRoutes {...route} key={index}></RouteWithSubRoutes>
              // <RouteWithSubRoutes key={index} {...route}></RouteWithSubRoutes>
              // <Route key={index} path={route.path} render={() => <route.component></route.component>}>
              // </Route>
              <RouteWithSubRoutes key={index} {...route}></RouteWithSubRoutes>
            )
          })
        }
      </Switch>
    </>
  )
}