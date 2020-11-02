import React, { Component } from 'react';

import Animate from '../../hoc/withAnimate';

import DetailUi from '../ui/DetailUi';

@Animate
class Detail extends Component {
  render() {
    return (
      <DetailUi></DetailUi>
    );
  }
}

export default Detail;