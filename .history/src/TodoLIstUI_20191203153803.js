import React, { Fragment } from 'react'
import { Input, Button, List } from 'antd'

const TodoLIstUI = props => {
  return (
    <Fragment>
      <div style={{ margin: '10px' }}>
        <Input
          placeholder="todoInfo"
          value={props.inputValue}
          onChange={props.handleInputChange}
          style={{ width: '300px', marginRight: '10px' }}
        ></Input>
        <Button onClick={props.handleBtnClick} type="primary">
          提交
        </Button>
      </div>
      <List
        style={{ margin: '10px', width: '370px' }}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item
            onClick={() => {
              props.handleDelitem(index)
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

export default TodoLIstUI
