import React from 'react';

import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import App from '../App.jsx';

import {Home} from '@/home/index.js';
import NotFound from '@/notFound/NotFound.jsx';

const index = () => {
  return (
    <BrowserRouter>
      <App>
        <Switch>
          <Redirect from="/" to="/admin" exact></Redirect>
          <Route path="/admin" component={() => <Home></Home>}></Route>
          <Route path="*" component={() => <NotFound></NotFound>}></Route>
        </Switch>
      </App>
    </BrowserRouter>
  );
}

export default index;