const defaultValue = {
  inputValue: '',
  list: []
}

export default (state = defaultValue, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  if (action.type === 'change_input_value') {
    newState.inputValue = action.value
  }
  return state
}
