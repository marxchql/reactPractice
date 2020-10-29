import React, { Component } from 'react';

import {RecommendWrap} from './StyledComponent';

import memoize from 'memoize-one';

class Recommend extends Component {
  state = {
    type: 1
  }

  filter = memoize(
    (list, type) => {
      return list.filter(item => item.type === type)
    }
  );

  handleClick = (num) => {
    return () => {
      this.setState({
        type: num
      })
    }
  }


  render() {
    const filteredList = this.filter(this.props.recommendList, this.state.type);
    console.log(filteredList)
    return (
      <RecommendWrap>
        <nav>
          <li onClick={this.handleClick(1)}>推荐</li>
          <li onClick={this.handleClick(2)}>日常</li>
          <li onClick={this.handleClick(3)}>最热</li>
        </nav>
        <ul>
          {
            filteredList.map((item) => {
              return (
                <li key={item.id}>{item.title}</li>
              )
            })
          }
        </ul>
      </RecommendWrap>
    );
  }
}

export default Recommend;