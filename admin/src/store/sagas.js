// import { CHANGE_PAGE_TITLE } from './actionTypes';
import { put, takeEvery } from 'redux-saga/effects'

function* changeTitle(action) {
  yield put({type: "changeTitle2", title: action.title});
}

function* mySaga() {
  yield takeEvery('changeTitle', changeTitle);
}

export default mySaga;