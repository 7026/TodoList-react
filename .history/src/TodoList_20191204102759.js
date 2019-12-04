import React, { Component } from 'react'
import { connect } from 'react-redux'

class TodoList extends Component {
  constructor(props, context) {
    super(props, context)
    this.handleInputValue = this.handleInputValue.bind(this)
  }

  render() {
    return (
      <div>
        <div>
          <input
            value={this.props.inputValue}
            onChange={this.handleInputValue}
          />
          <button>提交</button>
        </div>
        <ul>
          <li>TodoList</li>
        </ul>
      </div>
    )
  }
  handleInputValue(e) {
    console.log(e.target.value)
  }
}
// 连接规则  todoList 和 state
const mapStateToProps = state => {
  return {
    inputValue: state.inputValue
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
