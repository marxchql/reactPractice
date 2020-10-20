import React, { Component } from 'react';

import hoc from './hoc.js';

class App extends Component {
  render() {
    console.log(this)
    return (
      <div>app</div>
    );
  }
}

// const Hoc = hoc(App)
// const hoc = (Comp) => {
//   return class extends Component {
//     render() {
//       return <Comp msg="hello"/>
//     }
//   }
// }

// const Hoc = () => {
//   return <App msg="hello"></App>
// }

export default hoc(App);