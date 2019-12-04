import React, { Component, Fragment } from 'react'
import 'antd/dist/antd.css'
import { Input, Button } from 'antd'
export default class TodoList extends Component {
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
      </Fragment>
    )
  }
}
