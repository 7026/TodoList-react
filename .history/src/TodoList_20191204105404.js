import React from 'react'
import { connect } from 'react-redux'
import { CHANGE_INPUT_VALUE, ADD_ITEM } from './store/actionTypes'

const TodoList = props => {
  const { inputValue, handleInputValue, handleAddItem } = props
  return (
    <div>
      <div>
        <input value={inputValue} onChange={handleInputValue} />
        <button onClick={handleAddItem}>提交</button>
      </div>
      <ul>
        <li>TodoList</li>
      </ul>
    </div>
  )
}

// 连接规则  todoList 和 state
const mapStateToProps = state => {
  return {
    inputValue: state.inputValue
  }
}

// 把store.dispatch 挂载到 props 上
const mapDispatchToProps = dispatch => {
  return {
    handleInputValue(e) {
      const action = {
        type: CHANGE_INPUT_VALUE,
        value: e.target.value
      }
      dispatch(action)
    },
    handleAddItem() {}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
