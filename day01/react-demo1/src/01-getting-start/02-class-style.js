import React, { Component } from 'react';

import { DivStyles } from './03-styled-components';

// 使用classnames
import classNames from 'classnames/bind';
// 引入css
import styles from './02-style.css';

let cx = classNames.bind(styles);

// let styleObj = {
//   color: 'green',
//   fontSize: '50px'
// }



class App extends Component {
  render() {
    let className = cx({
      font: true
    });
    return (
      // <div style={ styleObj }>hello</div>
      <>
        <div className={ className }>hello</div>
        <DivStyles>styled-components</DivStyles>
      </>
    )
  }
}

export default App;