import { createStore, applyMiddleware } from 'redux';

import Immutable from 'immutable';

import thunk from 'redux-thunk';

import reducer from './reducer';

const initialState = Immutable.Map();

const store = createStore(reducer, initialState, applyMiddleware(thunk));

// console.log(store.getState())

export default store;