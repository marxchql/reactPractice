import React from 'react';

import Swiper from './Swiper';
import Menu from './Menu';
import Books from './Books';
import Recommend from './Recommend'

import {Container} from './StyledComponent';

const CooksUi = (props) => {
  return (
    <Container>
      <header>菜谱大全</header>
      <Swiper {...props}></Swiper>
      <Menu></Menu>
      <Books {...props}></Books>
      <Recommend {...props}></Recommend>
    </Container>
  )
}

export default CooksUi;

