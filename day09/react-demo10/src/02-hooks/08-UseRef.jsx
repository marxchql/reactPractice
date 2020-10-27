// import React, {createRef} from 'react';

// const UseRef = () => {
//   const btn = createRef()

//   function handleClick () {
//     console.log(btn.current)
//   }

//   return (
//     <div>
//       <button ref={btn} onClick={handleClick}>btn</button>
//     </div>
//   )
// }

// export default UseRef;

// import React, {useRef} from 'react';

// const UseRef = () => {
//   // const btn = createRef()
//   const btn = useRef()

//   function handleClick () {
//     console.log(btn.current)
//   }

//   return (
//     <div>
//       <button ref={btn} onClick={handleClick}>btn</button>
//     </div>
//   )
// }

// export default UseRef;

// import React, {useState, useEffect, Component} from 'react'

// function App() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setTimeout(() => {
//       console.log("count: " + count);
//     }, 3000);
//   }, [count]);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>增加 count</button>
//       <button onClick={() => setCount(count - 1)}>减少 count</button>
//     </div>
//   );
// }

// class App extends Component {
//   state = {
//     count: 0
//   }
//   setCount = () => {
//     this.setState(state => {
//       return {
//         count: state.count + 1
//       }
//     })
//     setTimeout(() => {
//       console.log(this.state.count)
//     }, 3000)
//   }

//   setCount1 = () => {
//     this.setState(state => {
//       return {
//         count: state.count - 1
//       }
//     })
//     setTimeout(() => {
//       console.log(this.state.count)
//     }, 3000)
//   }

//   render() {
//     return (
//       <div>
//         <p>You clicked {this.state.count} times</p>
//         <button onClick={() => this.setCount()}>增加 count</button>
//         <button onClick={() => this.setCount1()}>减少 count</button>
//       </div>
//     )
//   }
// }

// export default App

import React, {useRef} from 'react'
function App() {
  const count = useRef(0);

  const showCount = () => {
    alert("count: " + count.current);
  };

  const handleClick = number => {
    count.current = count.current + number;
    setTimeout(showCount, 3000);
  };

  return (
    <div>
      <p>You clicked {count.current} times</p>
      <button onClick={() => handleClick(1)}>增加 count</button>
      <button onClick={() => handleClick(-1)}>减少 count</button>
    </div>
  );
}

export default App;