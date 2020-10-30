//combineReducers 用于合并reducer
import { combineReducers } from 'redux';

import { reducer as cooksReducer } from 'home/cooks';
import { reducer as messageReducer } from 'home/message';


const reducer = combineReducers({
  cooksReducer,
  messageReducer
})

export default reducer;