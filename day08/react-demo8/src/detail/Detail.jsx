import React, { Component } from 'react';

class Detail extends Component {

  render() {
    console.log(this.props)
    let id = this.props.match.params.id
    return (
      <div>detail{id}</div>
    );
  }
}

export default Detail;