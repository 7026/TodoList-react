import React, { Component, Fragment } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store'

export default class TodoList extends Component {
  constructor(props) {
    super(props)
    console.log(store.getState())
  }

  render() {
    return (
      <Fragment>
        <div style={{ margin: '10px' }}>
          <Input
            placeholder="todoInfo"
            style={{ width: '300px', marginRight: '10px' }}
          ></Input>
          <Button type="primary">提交</Button>{' '}
        </div>
        <List
          style={{ margin: '10px', width: '370px' }}
          bordered
          dataSource={data}
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
}
