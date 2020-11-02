import React from 'react';

import { array, string } from 'prop-types';

import {SwiperWrap} from './StyledComponent';

import { Carousel } from 'antd-mobile';

//  class Swiper extends Component {
//   render() {
//     console.log(this.props)
//     return (
//       <SwiperWrap>
//         {
//           this.props.bannerList.length ? (
//             <Carousel
//               autoplay={true}
//               infinite
//             >
//               {
//                 this.props.bannerList.map((item) => {
//                   return <img src={this.props.bannerPrefix + item.url} alt="" key={item.id}/>
//                 })
//               }
//             </Carousel>
//           ) : null
//         }
//       </SwiperWrap>
//     )
//   }
// }

const Swiper = (props) => {
  return (
    <SwiperWrap>
      {
        props.bannerList.length ? (
          <Carousel
            autoplay={true}
            infinite
          >
            {
              props.bannerList.map((item) => {
                return <img src={props.bannerPrefix + item.url} alt="" key={item.id}/>
              })
            }
          </Carousel>
        ) : null
      }
    </SwiperWrap>
  )
}

Swiper.propTypes = {
  bannerList: array,
  bannerPrefix: string
}

export default Swiper;

