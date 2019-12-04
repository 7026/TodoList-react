import React, { Component } from 'react'
import 'antd/dist/antd.css'
import store from './store'
import {
  getInputChangeAction,
  getAddItemAction,
  getDelItemAction,
  // initListAction
  getInitList
} from './store/actionCreator'

import TodoListUI from './TodoLIstUI'

// import axios from 'axios'

export default class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleDelitem = this.handleDelitem.bind(this)
    store.subscribe(this.handleStoreChange)
  }

  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        list={this.state.list}
        handleDelitem={this.handleDelitem}
      />
    )
  }
  componentDidMount() {
    const action = getInitList()
    store.dispatch(action)
    console.log(action)
    // axios
    //   .get('/list.json')
    //   .then(res => {
    //     const data = res.data
    //     const action = initListAction(data)
    //     store.dispatch(action)
    //   })
    //   .catch(err => {})
  }

  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }
  handleStoreChange() {
    this.setState(store.getState())
  }
  handleBtnClick() {
    const action = getAddItemAction()
    store.dispatch(action)
  }
  handleDelitem(index) {
    const action = getDelItemAction(index)
    store.dispatch(action)
  }
}
