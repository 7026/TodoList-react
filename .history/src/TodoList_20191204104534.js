import React, { Component } from 'react'
import { connect } from 'react-redux'

class TodoList extends Component {
  render() {
    const { inputValue, handleInputValue } = this.props
    return (
      <div>
        <div>
          <input value={inputValue} onChange={handleInputValue} />
          <button onClick={this}>提交</button>
        </div>
        <ul>
          <li>TodoList</li>
        </ul>
      </div>
    )
  }
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
        type: 'change_input_value',
        value: e.target.value
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
