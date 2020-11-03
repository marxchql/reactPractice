import {
  CHANGE_SELECTED_TAB
} from './actionTypes';

import {Map} from 'immutable';

const defaultState = Map({
  selectedTab: sessionStorage.getItem('tabs') || 'cooks'
})

const reducer = (state = defaultState, action) => {
  action = action || {type: ''}
  switch (action.type) {
    case CHANGE_SELECTED_TAB:
      return state.set('selectedTab', action.selectedTab)
    default:
      return state
  }
}

export {reducer};