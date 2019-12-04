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

    console.log(
      newState.list.some(item => {
        return item !== action.value
      })
    )

    newState.list.push(action.value)
    return newState
  }

  return state
}
