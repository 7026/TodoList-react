import { takeEvery } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes'
import Axios from 'axios'

import { initListAction } from './actionCreator'
function* getList() {
  Axios.get('/list.json')
    .then(res => {
      const data = res.data
      const action = initListAction(data)
      store.dispatch(action)
    })
    .catch(err => {})
}

// generator 函数
function* mySagas() {
  yield takeEvery(GET_INIT_LIST, getList)
}

export default mySagas
