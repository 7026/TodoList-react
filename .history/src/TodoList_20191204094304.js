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

const mapStateToProps = state => {}

export default connect(null, null)(TodoList)
