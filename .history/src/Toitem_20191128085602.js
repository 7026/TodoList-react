import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Toitem extends Component {
  constructor(props) {
    super(props)
    this.handleDel = this.handleDel.bind(this)
  }
  render() {
    const { content } = this.props
    return <div onClick={this.handleDel}>{content}</div>
  }
  handleDel() {
    const { handleDelItem, index } = this.props
    handleDelItem(index)
  }
  // static getDerivedStateFromProps(props, state) {
  //   console.log('getDerivedStateFromProps')
  //   console.log(props)
  //   console.log(state)
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps.content !== this.props.content)

    if (nextProps.content !== this.props.content) {
      console.log(1111)
      return true
    } else {
      console.log(100022111)
      return false
    }
  }

  //   return null
  // }
  // 当一个组件 从父组件接收参数
  // 组要父组件render 函数被执行了，子组件这个生命周期就会被执行
  // componentWillReceiveProps() {
  //   console.log('componentWillReceiveProps')
  // }
  // // 当组件即将从页面剔除
  // componentWillUnmount() {
  //   console.log('componentWillUnmount')
  // }
}

Toitem.propTypes = {
  // test: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  handleDelItem: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
}
// Toitem.defaultProps = {
//   test: 'hello World'
// }

export default Toitem
