import React, { Component, createRef } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.ipt = createRef()
  }

  state = {
    textValue: 'hello'
  }

  handleChange(e) {
    // console.log(e.target.value)
    // 手动地修改textValue的值
    this.setState({
      textValue: e.target.value
    })
  }

  render() {
    return (
      <div>
        {/* <input 
          type="text" 
          value={ this.state.textValue }
          onChange={ this.handleChange.bind(this) }
        /> */}

        <input 
          type="text" 
          onInput={ this.handleChange.bind(this) } 
          ref={ this.ipt }
        />
      </div>
    );
  }

  // 生命周期钩子函数,类似与vue的mounted
  componentDidMount() {
    setTimeout(() => {
      console.log(this.state.textValue)
    }, 3000)
  }
}

export default App;