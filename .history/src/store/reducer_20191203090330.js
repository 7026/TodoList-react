const defaultState = {
  inputValue: '',
  list: []
}

export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  if (action.type === 'change_input_value') {
    // const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  if (action.type === 'add_todo_item') {
    newState.list.push(action.value)
    newState.inputValue = ''
    return newState
  }
  if (action.type === 'del_todo_item') {
    newState.list.splice(action.index)

    return newState
  }
  return state
}
