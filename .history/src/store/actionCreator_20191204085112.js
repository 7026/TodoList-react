import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DEL_TODO_ITEM,
  INIT_LIST,
  GET_INIT_LIST
} from './actionTypes'

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
export const getInitList = () => ({
  type: ''
})
