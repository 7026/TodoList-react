import React, { Component } from 'react'
import { connect } from 'react-redux'

class TodoList extends Component {
  render() {
    return (
      <div>
        <div>
          <input />
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
  return {}
}

export default connect(mapStateToProps, null)(TodoList)
