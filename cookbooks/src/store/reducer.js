//combineReducers 用于合并reducer
import { combineReducers } from 'redux';

import { reducer as cooksReducer } from 'home/cooks'


const reducer = combineReducers({
  cooksReducer,
})

export default reducer;