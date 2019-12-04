import { takeEvery } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes'

function* getList() {
  console.log('abc')
}

// generator 函数
function* mySagas() {
  yield takeEvery(GET_INIT_LIST, getList)
}

export default mySagas
