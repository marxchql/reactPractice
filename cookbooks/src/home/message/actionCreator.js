// import axios from 'axios';
import {
  MESSAGE_GET_LIST
} from './actionTypes';

import {
  getMessagesList
} from 'utils/api';

const getMessageListSync = data => {
  return {
    type: MESSAGE_GET_LIST,
    list: data.result
  }
}

const getMessageListAsync = () => {
  return async (dispatch) => {
    const res = await getMessagesList();
    if (res.status === 0) {
      dispatch(getMessageListSync(res))
    }
  } 
}

export {
  getMessageListAsync
}