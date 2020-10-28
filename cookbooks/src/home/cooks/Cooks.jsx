import React, { Component } from 'react';

import Swiper from './Swiper';
import Menu from './Menu';

import {Container} from './StyledComponent';

class Cooks extends Component {
  render() {
    return (
      <Container>
        <header>菜谱大全</header>
        <Swiper></Swiper>
        <Menu></Menu>
      </Container>
    );
  }
}

export default Cooks;