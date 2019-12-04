import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from './store'

class TodoList extends Component {
  render() {
    return (
      <div>
        <div>
          <input onChange value={this.props.inputValue} />
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

export default connect(mapStateToProps, null)(TodoList)
