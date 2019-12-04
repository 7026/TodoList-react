import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DEL_TODO_ITEM,
  INIT_LIST
} from './actionTypes'
import Axios from 'axios'

export const getInputChangeAction = value => {
  return {
    type: CHANGE_INPUT_VALUE,
    value
  }
}
export const getAddItemAction = () => {
  return {
    type: ADD_TODO_ITEM
  }
}
export const getDelItemAction = index => {
  return {
    type: DEL_TODO_ITEM,
    index
  }
}
export const initListAction = data => {
  return {
    type: INIT_LIST,
    data
  }
}
// redux-thunk
// export const getInitListAction = () => {
//   return dispatch => {
//     Axios.get('/list.json')
//       .then(res => {
//         const data = res.data
//         const action = initListAction(data)
//         dispatch(action)
//       })
//       .catch(err => {
//         console.log(err)
//       })
//   }
// }
