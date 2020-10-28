import React, { Component } from 'react';

// import axios from 'axios';
import { connect } from 'react-redux';
import {getBannerListAsync} from '../../store/actionCreator';

import Swiper from './Swiper';
import Menu from './Menu';

import {Container} from './StyledComponent';

const mapStateToProps = state => {
  // console.log('state', state)
  return {
    bannerList: state.bannerList,
    bannerPrefix: state.bannerPrefix
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getBanner() {
      dispatch(getBannerListAsync())
    }
  }
}

class Cooks extends Component {
  // state = {
  //   bannerList: [],
  //   bannerPrefix: ''
  // }

  render() {
    // console.log(this.props.bannerPrefix)
    // console.log(this.props.bannerList)
    return (
      <Container>
        <header>菜谱大全</header>
        <Swiper bannerPrefix={this.props.bannerPrefix} bannerList={this.props.bannerList}></Swiper>
        <Menu></Menu>
      </Container>
    );
  }

  componentDidMount() {
    // axios.get('http://10.31.160.92:5000/api/cooks/banner').then(res => {
    //   // console.log(res)
    //   let {data} = res;
    //   if (data.status === 0) {
    //     // console.log(data)
    //     this.setState({
    //       bannerPrefix: data.prefix,
    //       bannerList: data.result
    //     })
    //   }
    // })
    this.props.getBanner();
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cooks);