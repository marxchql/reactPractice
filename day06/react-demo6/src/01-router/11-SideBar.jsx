import React from 'react';

import {Route, Link, Switch} from 'react-router-dom'

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <h2>Home</h2>
  },
  {
    path: "/bubblegum",
    sidebar: () => <div>bubblegum!</div>,
    main: () => <h2>Bubblegum</h2>
  },
  {
    path: "/shoelaces",
    sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>Shoelaces</h2>
  }
];

const Sidebar = () => {
  return (
    <section style={{display: 'flex'}}>
      <nav style={{
        width: '200px',
        height: '300px',
        background: '#ccc'
      }}>
        <ul>
          {
            routes.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.path}>
                    {item.path === '/' ? 'home' : item.path.slice(1)}
                  </Link>
                </li>
              )
            })
          }
        </ul>

        <Switch>
          {
            routes.map((item, index) => {
              let {exact, path, sidebar} = item
              return (
                <Route 
                  exact={exact}
                  key={index}
                  path={path} 
                  component={sidebar}
                ></Route>
              )
            })
          }
        </Switch>
      </nav>
      <main style={{flex: 1}}>
        <Switch>
          {
            routes.map((item, index) => {
              let {exact, path, main} = item
              return (
                <Route 
                  exact={exact}
                  key={index}
                  path={path} 
                  component={main}
                ></Route>
              )
            })
          }
        </Switch>
      </main>
    </section>
  )
}

export default Sidebar