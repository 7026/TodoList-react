import React, { Component, Fragment } from 'react'
import 'antd/dist/antd.css'
// import { Input, Button, List } from 'antd'
import store from './store'
import {
  getInputChangeAction,
  getAddItemAction,
  getDelItemAction
} from './store/actionCreator'

import TodoListUI from './TodoLIstUI'

export default class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    store.subscribe(this.handleStoreChange)
  }

  render() {
    return <TodoListUI />
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
