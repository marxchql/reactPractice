import React, { Component } from 'react';

const hoc = (Comp) => {
  return class extends Component {
    render() {
      console.log('hoc:', this)
      return <Comp msg="hello" {...this.props} />
    }
  }
}

export default hoc;