//combineReducers 用于合并reducer
import { combineReducers } from 'redux';

import { reducer as cooksReducer } from 'home/cooks';
import { reducer as messageReducer } from 'home/message';
import { reducer as homeReducer } from 'home/reducer';


const reducer = combineReducers({
  cooksReducer,
  messageReducer,
  homeReducer
})

export default reducer;