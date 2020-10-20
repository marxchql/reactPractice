// 需要一个数据源
const defaultState = {
  count: 0
}


// 修改状态
const changeState = (action) => {
  action = action || {type: ''}
  switch (action.type) {
    case 'decrement':
      defaultState.count--;
      break;
    case 'increment':
      defaultState.count++;
      break;
    default:
  }
}

export {
  defaultState,
  changeState
}