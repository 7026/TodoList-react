import { CHANGE_INPUT_VALUE, ADD_ITEM } from './actionTypes'

const defaultValue = {
  inputValue: '',
  list: []
}

export default (state = defaultValue, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  if (action.type === CHANGE_INPUT_VALUE) {
    newState.inputValue = action.value
    return newState
  }

  if (action.type === ADD_ITEM) {
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }
  return state
}
