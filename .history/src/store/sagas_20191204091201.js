import { put, takeEvery } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes'
import { initListAction } from './actionCreator'

import Axios from 'axios'

function* getList() {
  const res = yield Axios.get('/list.json')

  // .then(res => {
  //   const data = res.data
  //   const action = initListAction(data)
  //   console.log(action)
  //   put(action)
  // })
  // .catch(err => {})
}

// generator 函数
function* mySagas() {
  yield takeEvery(GET_INIT_LIST, getList)
}

export default mySagas
