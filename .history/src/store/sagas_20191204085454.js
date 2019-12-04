import { takeEvery } from 'redux-saga/effects'
import moduleName from 'module'

// generator 函数
function* todoSagas() {
  yield takeEvery('USER_FETCH_REQUESTED')
}
export default todoSagas
