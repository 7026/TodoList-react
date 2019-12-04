const defaultState = {
  inputValue: '123',
  list: [1, 2]
}

export default (state = defaultState, action) => {
  if (action.type === 'change_input_value') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  if (action.type === 'input_value_list') {
    const newState = JSON.parse(JSON.stringify(state))

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

  return state
}
