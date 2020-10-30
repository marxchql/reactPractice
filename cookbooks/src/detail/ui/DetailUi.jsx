import React from 'react';
import {withRouter} from 'react-router-dom'

import { NavBar, Icon } from 'antd-mobile';

const DetailUi = withRouter((props) => {
  const {id} = props.match.params
  const {title} = props.location.state
  const {history} = props

  function goBack() {
    history.goBack()
  }

  return (
    <div>
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