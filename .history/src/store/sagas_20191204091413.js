import { put, takeEvery } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes'
import { initListAction } from './actionCreator'

import Axios from 'axios'

function* getList() {
  try {
    const res = yield Axios.get('/list1.json')
    const action = initListAction(res.data)
    yield put(action)
  } catch (error) {
    console.log(error)
  }
}

// generator 函数
function* mySagas() {
  yield takeEvery(GET_INIT_LIST, getList)
}

export default mySagas
