import React, { Component, Fragment } from 'react'
// Fragment 占位符  代替  最外层div

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: 'a',
      list: []
    }
  }

  render() {
    return (
      <Fragment>
        <div>
          <input
            value={this.state.inputValue}
            onChange={this.handleInputChange.bind(this)}
          />
          <button>提交</button>
        </div>
        <ul>
          <li>学英语</li>
          <li>学React</li>
        </ul>
      </Fragment>
    )
  }
  handleInputChange(e) {
    // this.state.inputValue = e.target.value
    this.setState({
      inputValue: e.target.value
    })
  }
}

export default TodoList
