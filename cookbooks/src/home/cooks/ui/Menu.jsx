import React, { Component } from 'react';
import { Grid } from 'antd-mobile';

import {MenuWrap} from './StyledComponent';

import Pic1 from 'img/pic1.jpg';
import Pic2 from 'img/pic2.jpg';
import Pic3 from 'img/pic3.jpg';
import Pic4 from 'img/pic4.jpg';

const data1 = [
  {
    icon: Pic1,
    title: '早餐'
  },
  {
    icon: Pic2,
    title: '中餐'
  },
  {
    icon: Pic3,
    title: '晚餐'
  },
  {
    icon: Pic4,
    title: '夜宵'
  }
]

class Menu extends Component {
  render() {
    return (
      <MenuWrap>
        <Grid data={data1}
          columnNum={4}
          hasLine={false}
          renderItem={dataItem => (
            <div>
              <img src={dataItem.icon} alt="" />
              <div>
                <span className="title">{dataItem.title}</span>
              </div>
            </div>
          )}
        />
      </MenuWrap>
    );
  }
}

export default Menu;