import { createStore, applyMiddleware } from 'redux';

import reducer from './reducer';

// 引入中间件
// import thunk from 'redux-thunk';

import m1 from './middleWares/m1';
import m2 from './middleWares/m2';


// 只要使用了中间件，那么所有的dispatch都会被中间件所拦截，
// 除非遇到next()
const middleware = applyMiddleware(m1, m2);

export default createStore(reducer, middleware);