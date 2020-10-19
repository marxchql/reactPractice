import React, { Component } from 'react';

class Input extends Component {
  state = {
    textValue: 'gaotian'
  }

  handleChange = () => {
    return (e) => {
      this.setState({
        textValue: e.target.value
      })
    }
  }

  handleKeyUp = () => {
    return (e) => {
      // console.log(this.state.textValue)
      // 判断是否按下的是回车键
      if (e.keyCode === 13) {
        // console.log(this.state.textValue)
        this.props.onMessage(this.state.textValue)
        this.setState({
          textValue: ''
        })
      }
    }
  }

  render() {
    return (
      <input 
        type="text" 
        value={ this.state.textValue }
        onChange={ this.handleChange() }
        onKeyUp={ this.handleKeyUp() }
      />
    );
  }
}

export default Input;