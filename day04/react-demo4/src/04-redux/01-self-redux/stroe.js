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


// dispatch,用来触发changeState
const dispatch = (action) => {
  changeState(action);
  renderDom();
}

// 渲染页面
const renderDom = () => {
  let countEle = document.getElementById('count');
  countEle.innerHTML = defaultState.count;
}

export {
  dispatch
}