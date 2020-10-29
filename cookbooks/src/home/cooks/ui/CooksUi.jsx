import React from 'react';

import Swiper from './Swiper';
import Menu from './Menu';

import {Container} from './StyledComponent';

const CooksUi = (props) => {
  // console.log(props)
  return (
    <Container>
      <header>菜谱大全</header>
      <Swiper {...props}></Swiper>
      <Menu></Menu>
    </Container>
  )
}

export default CooksUi;

