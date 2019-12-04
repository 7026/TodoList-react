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
    const isD = newState.list.some(item => {
      return item === action.value
    })
    if (!isD) {
      newState.list.push(action.value)
    } else {
      console.log('重复')
    }
    return newState
  }
  newState.inputValue = ''
  return state
}
