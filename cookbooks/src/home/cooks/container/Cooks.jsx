import React, { Component } from 'react';

import CooksUi from '../ui/CooksUi';

// import axios from 'axios';
import { connect } from 'react-redux';
import {
  getCooksallAsync
} from '../actionCreator';

const mapStateToProps = state => {
  return {
    ...state.cooksReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAll() {
      dispatch(getCooksallAsync())
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
    console.log('cooks render')
    return (
      <CooksUi {...this.props}></CooksUi>
    );
  }

  componentDidMount() {
    // this.props.getBanner();
    // this.props.getBooks();
    // this.props.getRecommend();
    this.props.getAll();
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(Cooks);
export default Cooks;


// export default Hoc(Cooks);