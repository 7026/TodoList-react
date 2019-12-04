import { takeEvery } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes'
import Axios from 'axios'

function* getList() {
  Axios
}

// generator 函数
function* mySagas() {
  yield takeEvery(GET_INIT_LIST, getList)
}

export default mySagas
