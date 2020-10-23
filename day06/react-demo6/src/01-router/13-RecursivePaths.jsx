import React from 'react';

import {Switch, Route, Link, Redirect, useParams, useRouteMatch} from 'react-router-dom';

const PEEPS = [
  { id: 0, name: "Michelle", friends: [1, 2, 3] },
  { id: 1, name: "Sean", friends: [0, 3] },
  { id: 2, name: "Kim", friends: [0, 1, 3] },
  { id: 3, name: "David", friends: [1, 2] }
];

// 用于查找是哪个人
const find = (id) => {
  const obj = PEEPS.find((item) => item.id === +id)
  return obj
}

const Person = () => {
  // hooks
  let { id } = useParams();
  // let {pathname} = useLocation();
  // console.log(useLocation())
  // console.log(useRouteMatch())
  let {url} = useRouteMatch();
  // console.log(pathname)
  return (
    <div>
      {find(id).name}'s Friends
      <ul>
        {
          find(id).friends.map((item, index) => {
            return (
              <li key={index}>
                <Link to={url + '/' + item}>{find(item).name}</Link>
              </li>
            )
          })
        }
      </ul>

      <Switch>
        <Route path={url + '/:id'}>
          <Person />
        </Route>
      </Switch>
    </div>
  )
}



const RecursivePaths = () => {
  return (
    <>
      <Switch>
        <Route path="/:id">
          <Person/>
        </Route>
        <Route path="/">
          <Redirect to="/0" />
        </Route>
      </Switch>
    </>
  )
}

export default RecursivePaths;