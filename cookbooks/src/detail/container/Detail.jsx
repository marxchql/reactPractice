import React from 'react';

import Animate from '../../hoc/withAnimate';

import DetailUi from '../ui/DetailUi';

// @Animate
// class Detail extends Component {
//   render() {
//     return (
//       <DetailUi></DetailUi>
//     );
//   }
// }
const Detail = Animate(() => {
  return (
    <DetailUi></DetailUi>
  )
})

export default Detail;