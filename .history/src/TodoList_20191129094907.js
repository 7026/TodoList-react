import React, { Component, Fragment } from 'react'
import 'antd/dist/antd.css'
import { Input, Button } from 'antd'

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.'
]
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
