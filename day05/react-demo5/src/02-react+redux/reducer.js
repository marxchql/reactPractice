const defaultState = {
  count: 0
}

// 纯函数
const reducer = (state = defaultState, action) => {
  action = action || {type: ''}
  switch (action.type) {
    case 'decrement':
      // state.count--;
      // break;
      return {
        ...state,
        count: state.count - action.num
      }
    case 'increment':
      // state.count++;
      // break;
      return {
        ...state,
        count: state.count + action.num
      }
    default:
      return state
  }
}

// module.exports = reducer;
export default reducer;