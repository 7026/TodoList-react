import { takeEvery } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes '

function* getInitList() {
  console.log('abc')
}

// generator 函数
function* todoSagas() {
  yield takeEvery(GET_INIT_LIST, getInitList)
}

export default todoSagas
