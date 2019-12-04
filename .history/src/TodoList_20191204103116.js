import React, { Component } from 'react'
import { connect } from 'react-redux'

class TodoList extends Component {
  // constructor(props, context) {
  //   super(props, context)
  //   this.handleInputValue = this.handleInputValue.bind(this)
  // }

  render() {
    return (
      <div>
        <div>
          <input
            value={this.props.inputValue}
            onChange={this.props.handleInputValue}
          />
          <button>提交</button>
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
