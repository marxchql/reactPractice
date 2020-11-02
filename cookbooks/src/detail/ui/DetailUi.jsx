import React from 'react';
import {useParams, useLocation, useHistory } from 'react-router-dom'

import { NavBar, Icon } from 'antd-mobile';

const DetailUi = (props) => {
  // let match = useRouteMatch("/detail/:id");
  let params = useParams();
  let location = useLocation();
  let history = useHistory();

  const id = params ? params.id : '0';
  const title = location.state ? location.state.title : '详情页';

  function goBack() {
    history.goBack()
  }

  return (
    <div style={{
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      background: '#eee'
    }}>
      <NavBar
        mode="dark"
        icon={<Icon type="left" />}
        onLeftClick={goBack}
        style={{background: 'orange'}}
      >{title}</NavBar>
      <div>{id}</div>
    </div>
  );
}

export default DetailUi;