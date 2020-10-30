// import axios from 'axios';
import {
  CHANGE_SELECTED_TAB
} from './actionTypes';


const changeSelected = data => {
  return {
    type: CHANGE_SELECTED_TAB,
    selectedTab: data
  }
}

export {
  changeSelected
}