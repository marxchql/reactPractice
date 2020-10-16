import React, { Component } from 'react';


// let condition = true;

class App extends Component {
  state = { 
    condition: false,
    list: [{
      id: 1,
      name: 'Leo',
      age: 35
    }, {
      id: 2,
      name: 'XiaoMing',
      age: 16
    }],
    content: "<p>React.js是一个构建UI的库</p>"
  }

  handleClick() {
    this.setState((prevState) => {
      return {
        condition: !prevState.condition
      }
    })
  }

  render() {
    return (
      // <div onClick={ this.handleClick.bind(this) }>
      //   {
      //     this.state.condition ? '❤️取消' : '🖤收藏'
      //   }
      // </div>
      <div>
        {/* <div>{ this.state.content }</div> */}
        <div dangerouslySetInnerHTML={{ __html: this.state.content }}></div>
        <div className="font"></div>
        <label htmlFor="abc">name:</label>
        <input type="text" id="abc"/>
        <ul>
          {
            this.state.list.map(item => {
              return (
                <li key={ item.id }>
                  <span>{ item.name }</span> -
                  <span>{ item.age }</span>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;