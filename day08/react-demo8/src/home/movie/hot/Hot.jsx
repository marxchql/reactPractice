import React, { Component } from 'react';
// import {useHistory} from 'react-router-dom';

class Hot extends Component {
  handleClick = () => {
    // let history = useHistory();
    // console.log(history)
    // console.log(this.props)
    let {history} = this.props
    history.push('/detail/' + Math.random())
  }

  render() {
    return (
      <div onClick={this.handleClick}>Hot</div>
    );
  }
}

export default Hot;