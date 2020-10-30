import {
  CHANGE_SELECTED_TAB
} from './actionTypes';

const defaultState = {
  // selectedTab: 'cooks',
  selectedTab: sessionStorage.getItem('tabs') || 'cooks'
}

const reducer = (state = defaultState, action) => {
  action = action || {type: ''}
  switch (action.type) {
    case CHANGE_SELECTED_TAB:
      return {
        ...state,
        selectedTab: action.selectedTab
      }
    default:
      return state
  }
}

export {reducer};