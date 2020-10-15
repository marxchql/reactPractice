import React from 'react';

import { number } from 'prop-types';

class Child extends React.Component {
  // static是class里面的静态属性
  static defaultProps = {
    title: 'vue!'
  }
  render() {
    return (
      <div>{ this.props.title }</div>
    )
  }
}

Child.propTypes = {
  title: number,
}

// Child.defaultProps = {
//   title: 'vue!'
// }

export default Child;


// export default function Child (props) {
//   return (
//     <div>{ props.title }</div>
//   )
// }

// Child.defaultProps = {
//   title: 'vue!'
// }