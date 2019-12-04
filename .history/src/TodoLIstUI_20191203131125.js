import React, { Component, Fragment } from 'react'
import { Input, Button, List } from 'antd'

export default class TodoLIstUI extends Component {
  render() {
    return (
      <Fragment>
        <div style={{ margin: '10px' }}>
          <Input
            placeholder="todoInfo"
            value={this.props.inputValue}
            onChange={this.props.handleInputChange}
            style={{ width: '300px', marginRight: '10px' }}
          ></Input>
          <Button onClick={this.props.handleBtnClick} type="primary">
            提交
          </Button>
        </div>
        <List
          style={{ margin: '10px', width: '370px' }}
          bordered
          dataSource={this.props.list}
          renderItem={(item, index) => (
            <List.Item
              onClick={() => {
                this.props.handleDelitem.bind(this, index)
              }}
            >
              {/* <Typography.Text mark>[ITEM]</Typography.Text> */}
              {item}
            </List.Item>
          )}
        />
      </Fragment>
    )
  }
}
