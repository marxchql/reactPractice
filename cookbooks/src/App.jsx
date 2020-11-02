import React from 'react';

// import animate from './hoc/withAnimate';

import { Route, Redirect } from 'react-router-dom';

import Home from 'home/Home';
import {Detail} from './detail'

const App = () => {
  return (
    <div>
      <>
        <Redirect from="/" to="/home" exact></Redirect>
        <Route path="/home" children={(props) => <Home {...props}></Home>}></Route>
        <Route path="/detail/:id" children={(props) => <Detail {...props}></Detail>}></Route>
      </>
    </div>
  );
}

export default App;
