import React, { Component, Fragment } from 'react'
// Fragment 占位符  代替  最外层div

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
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
          <button onClick={this.handleButtonClick.bind(this)}>提交</button>
        </div>
        <ul>
          {this.state.list.map((item, index) => {
            return (
              <li key={index} onClick={this.handleDel.bind(this)}>
                {' '}
                {item}
              </li>
            )
          })}
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
  handleButtonClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }
  handleDel(e) {
    console.log(e)
  }
}

export default TodoList
