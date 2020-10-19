import React, { Component, createContext } from 'react';

const { Provider, Consumer: CountConsumer } = createContext();

class CountProvider extends Component {
  state = {
    count: 1
  }

  increment = (num) => {
    // 加
    // console.log(123)
    // this.setState({
    //   count = this.state.count++
    // })
    this.setState(prevState => {
      return {
        count: prevState.count + num
      }
    })
  }

  decrement() {
    // 减
  }

  render() {
    return (
      <Provider value={{
        count: this.state.count,
        increment: this.increment,
        decrement: this.decrement
      }}>
        { this.props.children }
      </Provider>
    );
  }
}

export {
  CountProvider,
  CountConsumer
};