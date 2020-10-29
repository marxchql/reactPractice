import React, { Component } from 'react';

import CooksUi from '../ui/CooksUi';

// import axios from 'axios';
import { connect } from 'react-redux';
import {getBannerListAsync} from '../actionCreator';

const mapStateToProps = state => {
  console.log('state', state)
  return {
    bannerList: state.cooksReducer.bannerList,
    bannerPrefix: state.cooksReducer.bannerPrefix
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getBanner() {
      dispatch(getBannerListAsync())
    }
  }
}


@connect(mapStateToProps, mapDispatchToProps)
class Cooks extends Component {
  // state = {
  //   bannerList: [],
  //   bannerPrefix: ''
  // }

  render() {
    // console.log(this.props.bannerPrefix)
    // console.log(this.props.bannerList)
    return (
      <CooksUi bannerList={this.props.bannerList} bannerPrefix={this.props.bannerPrefix}></CooksUi>
      // <Container>
      //   <header>菜谱大全</header>
      //   <Swiper bannerPrefix={this.props.bannerPrefix} bannerList={this.props.bannerList}></Swiper>
      //   <Menu></Menu>
      // </Container>
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

// export default connect(mapStateToProps, mapDispatchToProps)(Cooks);
export default Cooks;


// export default Hoc(Cooks);