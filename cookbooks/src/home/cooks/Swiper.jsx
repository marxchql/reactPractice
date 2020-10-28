import React, {Component} from 'react';

import {SwiperWrap} from './StyledComponent';

import { Carousel } from 'antd-mobile';

class Swiper extends Component {
  render() {
    return (
      <SwiperWrap>
        <Carousel
          autoplay={true}
          infinite
        >
          <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3848015300,1409126562&fm=26&gp=0.jpg" alt=""/>
          <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3014583350,1147166272&fm=26&gp=0.jpg" alt=""/>
          <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1582790281,1977965252&fm=26&gp=0.jpg" alt=""/>
          <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=19405682,2151523212&fm=26&gp=0.jpg" alt=""/>
        </Carousel>
      </SwiperWrap>
    )
  }
}

export default Swiper;

