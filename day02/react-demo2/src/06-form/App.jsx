import React, { Component } from 'react';

class App extends Component {
  state = {
    textValue: 'hello',
    textAreaValue: 'world',
    selectValue: '2'
  }

  handleChange = (e) => {
    // console.log(e.target.value)
    this.setState({
      textValue: e.target.value
    })
  }

  handleChange2 = (e) => {
    this.setState({
      textAreaValue: e.target.value
    })
  }

  handleChange3 = (e) => {
    this.setState({
      selectValue: e.target.value
    })
  }

  handleSubmit = () => {
    return (e) => {
      e.preventDefault()
      console.log(this.state.textValue)
      console.log(this.state.textAreaValue)
      console.log(this.state.selectValue)
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        textValue: ''
      })
    }, 2000)
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit() }>
        <input 
          type="text" 
          value={ this.state.textValue }
          onChange={ this.handleChange }
        />
        <br/>
        <br/>

        <textarea
          value={ this.state.textAreaValue }
          onChange={ this.handleChange2 }
        ></textarea>

        <br/>
        <br/>

        <select
          value={ this.state.selectValue }
          onChange={ this.handleChange3 }
        >
          <option value="1">北京</option>
          <option value="2">上海</option>
          <option value="3">杭州</option>
        </select>

        <br/>
        <br/>
        <input type="submit" value="提交" />
      </form>
    );
  }
}

export default App;