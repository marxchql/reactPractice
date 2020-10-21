// 引入state和changState
import { defaultState, reducer } from './reducer.js';

// 创建仓库
const createStore = (reducer) => {

  // 获取数据
  const getState = () => {
    return defaultState
  }

  // 观察者模式
  const listeners = []
  // 订阅
  const subscribe = (listener) => {
    listeners.push(listener)
  }

  
  // dispatch,用来触发changeState
  const dispatch = (action) => {
    reducer(action);
    // renderDom();
    // 发布
    listeners.forEach(listener => listener())
  }


  return {
    getState,
    dispatch,
    subscribe
  }
}

const store = createStore(reducer)

// 渲染页面
const renderDom = () => {
  let countEle = document.getElementById('count');
  countEle.innerHTML = defaultState.count;
}

store.subscribe(renderDom)

export default store;