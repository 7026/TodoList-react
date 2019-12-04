import React, { Component, Fragment } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store'

export default class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChnage = this.handleStoreChnage.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    store.subscribe(this.handleStoreChnage)
  }

  render() {
    return (
      <Fragment>
        <div style={{ margin: '10px' }}>
          <Input
            placeholder="todoInfo"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            style={{ width: '300px', marginRight: '10px' }}
          ></Input>
          <Button onClick={this.handleBtnClick} type="primary">
            提交
          </Button>{' '}
        </div>
        <List
          style={{ margin: '10px', width: '370px' }}
          bordered
          dataSource={this.state.list}
          renderItem={item => (
            <List.Item>
              {/* <Typography.Text mark>[ITEM]</Typography.Text> */}
              {item}
            </List.Item>
          )}
        />
      </Fragment>
    )
  }
  handleInputChange(e) {
    const action = {
      type: 'change_input_value',
      value: e.target.value
    }
    store.dispatch(action)
  }
  handleStoreChnage() {
    this.setState(store.getState())
  }
  handleBtnClick(e) {
    console.log(e.target.value)
  }
}
