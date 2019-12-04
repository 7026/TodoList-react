import React from 'react'
import { connect } from 'react-redux'
import { changeInputValue, addItem } from './store/actionCreators'

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
      const action = changeInputValue(e.target.value)
      dispatch(action)
    },
    handleAddItem() {
      const action = addItem()
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
