const { createStore } = require('redux');
// console.log(redux);

const reducer = require('./reducer');

const store = createStore(reducer);

// console.log(store);

// 调用stroe下面的getState方法
// 打印state里面的count
// console.log(store.getState().count)

// 调用store下面的dispatch方法
// store.dispatch({
//   type: 'decrement',
//   num: 8
// })

// console.log(store.getState().count)


// 调用store下面的subscribe，用于订阅
// 一旦dispatch触发的
store.subscribe(() => {
  console.log(store.getState().count)
})


// 改变并且发布
store.dispatch({
  type: 'increment',
  num: 8
})
