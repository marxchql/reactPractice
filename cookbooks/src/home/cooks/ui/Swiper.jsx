import React, {Component} from 'react';

import { array, string } from 'prop-types';

import {SwiperWrap} from './StyledComponent';

import { Carousel } from 'antd-mobile';

class Swiper extends Component {
  render() {
    // console.log(this.props)
    return (
      <SwiperWrap>
        <Carousel
          autoplay={true}
          infinite
        >
          {
            this.props.bannerList.map((item) => {
              return <img src={this.props.bannerPrefix + item.url} alt="" key={item.id}/>
            })
          }
        </Carousel>
      </SwiperWrap>
    )
  }
}

Swiper.propTypes = {
  bannerList: array,
  bannerPrefix: string
}

export default Swiper;

