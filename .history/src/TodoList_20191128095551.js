import React, { Component, Fragment } from 'react'
import TodoItem from './Toitem'
import './style.css'
import axiox from 'axios'
// import { get } from 'http'

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
  // 在组建即将被挂载到页面前执行
  // componentWillMount() {
  //   console.log('componentWillMount')
  // }
  // 在组件被挂载到页面之后执行
  // componentDidMount() {
  //   console.log('componentDidMount')
  //   return null
  // }
  // // 组件更新之前自动执行
  // shouldComponentUpdate() {
  //   console.log('shouldComponentUpdate')
  //   return true
  //   // 如果是return false  组件不会更新    return false
  // }
  // // 组件更新之前自动执行,在shouldComponentUpdate后执行
  // // 如果在shouldComponentUpdate后执行 返回 true  执行  返回false  则不执行
  // componentWillUpdate() {
  //   console.log('componentWillUpdate')
  // }
  // // 组件更新完成后执行
  // componentDidUpdate() {
  //   console.log('componentDidUpdate')
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log('componentDidUpdate')
  // }

  // static getDerivedStateFromProps(props, state) {
  //   console.log('getDerivedStateFromProps')
  //   return null
  // }
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('shouldComponentUpdate')
  //   return true
  // }
  // getSnapshotBeforeUpdate = (prevProps, prevState) => {
  //   console.log('getSnapshotBeforeUpdate')
  //   return null
  // }

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
            // ref={input => (this.input = input)}
          />
          <button onClick={this.handleButtonClick}>提交</button>
        </div>
        <ul>{this.getTodoItem()}</ul>
        {/* <Get url="/api/user" params={{ id: '1234' }}>
          {(error, response, isLoading, onReload) => {}}
        </Get> */}
      </Fragment>
    )
  }
  // axios  请求  约定放在componentDidMount
  componentDidMount() {}

  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          key={item}
          content={item}
          index={index}
          handleDelItem={this.handleDel}
        />
      )
    })
  }
  handleInputChange(e) {
    // console.log(e.target)
    const value = e.target.value
    // const value = this.input.value
    this.setState(() => ({ inputValue: value }))
  }
  handleButtonClick() {
    this.setState(
      prevState => ({
        list: [...prevState.list, prevState.inputValue],
        inputValue: ''
      })
      // 异步执行  获取dom元素
      // () => {
      //   // console.log(this.url.querySelectorAll('div').length)
      // }
    )
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
