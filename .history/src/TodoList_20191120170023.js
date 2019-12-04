import React, { Component, Fragment } from 'react'
import './style.css'
import TodoItem from './Toitem'

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
          <label htmlFor="insertArea">输入内容</label>
          <input
            id="insertArea"
            className="input"
            value={this.state.inputValue}
            onChange={this.handleInputChange.bind(this)}
          />
          <button onClick={this.handleButtonClick.bind(this)}>提交</button>
        </div>
        <ul>
          {this.state.list.map((item, index) => {
            return (
              <div key={index}>
                {/* // <li
              //   key={index}
              //   onClick={this.handleDel.bind(this, index)}
              //   dangerouslySetInnerHTML={{ __html: item }}
              // ></li> */}
                <TodoItem content={item} />
              </div>
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
  handleDel(index) {
    // immutable
    // state 不允许我们做任何做改变
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list
    })
  }
}

export default TodoList
