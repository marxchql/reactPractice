import React from 'react';

import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import App from '../App.jsx';

import {Home} from '@/home/index.js';
import NotFound from '@/notFound/NotFound.jsx';

import Welcome from '@/pages/welcome/Welcome.jsx';
import Buttons from '@/pages/ui/Buttons.jsx';
import Modals from '@/pages/ui/Modals.jsx';
import Loading from '@/pages/ui/Loading.jsx';
import Notification from '@/pages/ui/Notification.jsx';
import Tabs from '@/pages/ui/Tabs.jsx';
import Gallery from '@/pages/ui/Gallery.jsx';
import Login from '@/pages/form/Login.jsx';
import Register from '@/pages/form/Register.jsx';
import Basic from '@/pages/table/Basic.jsx';

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
              <Route path="/admin/ui/loadings" component={() => <Loading></Loading>}></Route>
              <Route path="/admin/ui/notification" component={() => <Notification></Notification>}></Route>
              <Route path="/admin/ui/tabs" component={() => <Tabs></Tabs>}></Route>
              <Route path="/admin/ui/gallery" component={() => <Gallery></Gallery>}></Route>
              <Route path="/admin/form/login" component={() => <Login></Login>}></Route>
              <Route path="/admin/form/reg" component={() => <Register></Register>}></Route>
              <Route path="/admin/table/basic" component={() => <Basic></Basic>}></Route>
            </Switch>
          </Home>}></Route>
          <Route path="*" component={() => <NotFound></NotFound>}></Route>
        </Switch>
      </App>
    </BrowserRouter>
  );
}

export default index;