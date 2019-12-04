import { takeEvery } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes'

function* getInitList() {
  yield console.log('abc')
}

// generator 函数
function* mySagas() {
  yield takeEvery(GET_INIT_LIST, getInitList)
}

export default mySagas
