import React, { Component } from 'react';

// class Child extends Component {
//   render() {
//     console.log('child render')
//     return (
//       <div>child</div>
//     );
//   }

//   componentDidMount() {
//     console.log('child mounted')
//   }
// }

class App extends Component {
  state = {
    a: 10
  }

  // 在合成事件里面使用setState  异步的
  handleClick = () => {
    // let num = this.state.a
    // this.setState({
    //   a: num + 5
    // })
    // this.setState({
    //   a: num + 5
    // })
    // this.setState({
    //   a: num + 5
    // })
    // this.setState({
    //   a: num + 5
    // })
    this.setState((prevState) => {
      return {
        a: prevState.a + 5
      }
    })
    this.setState((prevState) => {
      return {
        a: prevState.a + 5
      }
    })
    this.setState((prevState) => {
      return {
        a: prevState.a + 5
      }
    })
    this.setState((prevState) => {
      return {
        a: prevState.a + 5
      }
    })
  }

  render() {
    return (
      <div id="demo" onClick={ this.handleClick }>{ this.state.a }</div>
    )
  }

  // 在生命周期里面使用setState   异步的
  componentDidMount() {
    // setTimeout(() => {
    //   this.setState(() => {
    //     return {
    //       a: 20
    //     }
    //   })
    //   console.log(this.state.a)
    // }, 1000)
    // document.getElementById('demo').addEventListener('click', () => {
    //   this.setState({
    //     a: 20
    //   })
    //   console.log(this.state.a)
    // })
    
  }

  // 在原生的js里面(定时器,事件绑定)，setState是同步的




  // render() {
  //   console.log('father render')
  //   return (
  //     <div>
  //       father
  //     </div>
  //   );
  // }

  // componentDidMount() {
  //   console.log('father mounted')
  // }
}

export default App;