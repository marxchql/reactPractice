import { createStore, applyMiddleware } from 'redux';

import reducer from './reducer';

// 引入中间件
import thunk from 'redux-thunk';

const middleware = applyMiddleware(thunk);

export default createStore(reducer, middleware);