import React from 'react';

import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import App from '../App.jsx';

import {Home} from '@/home/index.js';
import NotFound from '@/notFound/NotFound.jsx';

import Welcome from '@/pages/welcome/Welcome.jsx';
import Buttons from '@/pages/ui/Buttons.jsx';
import Modals from '@/pages/ui/Modals.jsx';

const index = () => {
  return (
    <BrowserRouter>
      <App>
        <Switch>
          <Redirect from="/" to="/admin" exact></Redirect>
          <Route path="/admin" component={() => <Home>
            <Switch>
              <Redirect from="/admin" to="/admin/home" exact></Redirect>
              <Route path="/admin/home" component={() => <Welcome></Welcome>}></Route>
              <Route path="/admin/ui/buttons" component={() => <Buttons></Buttons>}></Route>
              <Route path="/admin/ui/modals" component={() => <Modals></Modals>}></Route>
            </Switch>
          </Home>}></Route>
          <Route path="*" component={() => <NotFound></NotFound>}></Route>
        </Switch>
      </App>
    </BrowserRouter>
  );
}

export default index;