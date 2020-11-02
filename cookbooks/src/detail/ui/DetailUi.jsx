import React from 'react';
import {withRouter} from 'react-router-dom'

import { NavBar, Icon } from 'antd-mobile';

const DetailUi = withRouter((props) => {
  // const {id} = props.match.params
  // const {title} = props.location.state
  const id = props.match ? props.match.params.id : '0';
  const title = props.location.state ? props.location.state.title : '详情页';
  const {history} = props

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
})

export default DetailUi;