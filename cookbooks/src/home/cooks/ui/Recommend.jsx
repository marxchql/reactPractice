import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import {RecommendWrap} from './StyledComponent';

import memoize from 'memoize-one';

@withRouter
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

  goToDetail = (id, title) => {
    // console.log(this.props)
    // const {history} = this.props
    // history.push('/detail')
    return () => {
      const {history} = this.props
      history.push('/detail/' + id, {
        title: title
      })
    }
  }


  render() {
    const filteredList = this.filter(this.props.recommendList, this.state.type);
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
                <li 
                  key={item.id}
                  onClick={this.goToDetail(item.id, item.title)}
                >{item.title}</li>
              )
            })
          }
        </ul>
      </RecommendWrap>
    );
  }
}

export default Recommend;