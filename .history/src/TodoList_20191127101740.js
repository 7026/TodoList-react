import React, { Component, Fragment } from 'react'
import TodoItem from './Toitem'
import './style.css'

// Fragment 占位符  代替  最外层div

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.handleDel = this.handleDel.bind(this)
  }

  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="insertArea">输入内容</label>
          <input
            id="insertArea"
            className="input"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            ref={input => {
              this.input = input
            }}
          />
          <button onClick={this.handleButtonClick}>提交</button>
        </div>
        <ul>{this.getTodoItem()}</ul>
      </Fragment>
    )
  }
  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          key={index}
          content={item}
          index={index}
          handleDelItem={this.handleDel}
        />
      )
    })
  }
  handleInputChange(e) {
    console.log(e.target)
    const value = e.target.value
    this.setState(() => ({ inputValue: value }))
  }
  handleButtonClick() {
    this.setState(prevState => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }))
  }
  handleDel(index) {
    // immutable
    // state 不允许我们做任何做改变
    this.setState(prevState => {
      const list = [...prevState.list]
      list.splice(index, 1)
      return {
        list
      }
    })
  }
}

export default TodoList
