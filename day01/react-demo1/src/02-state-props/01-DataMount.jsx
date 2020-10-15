import React, { Component } from 'react';
import Child from './02-Child.jsx';
// import Child from './03-slot.jsx';

// class Child2 extends Component {
//   render() {
//     return <div>孙子</div>
//   }
// }

class App extends Component {
  render() {
    return (
      <Child title={0}/>
      // <>
      //   <div>hello</div>
      //   <Child>
      //     <p>你好</p>
      //     <p>世界</p>
      //     <Child2 />
      //   </Child>
      // </>
    )
  }
}

export default App;