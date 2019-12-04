import { takeEvery } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes '

// generator 函数
function* todoSagas() {
  yield takeEvery('USER_FETCH_REQUESTED')
}
export default todoSagas
