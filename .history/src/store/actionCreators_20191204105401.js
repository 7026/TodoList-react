import { CHANGE_INPUT_VALUE, ADD_ITEM } from './actionTypes'

export const changeInputValue = value => {
  return {
    type: CHANGE_INPUT_VALUE,
    value
  }
}

export const addItem = () => {
  return {
    type: ADD_ITEM
  }
}
