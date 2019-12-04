const defaultState = {
  inputValue: '123',
  list: [1, 2]
}

export default (state = defaultState, action) => {
  console.log(action)

  return state
}
