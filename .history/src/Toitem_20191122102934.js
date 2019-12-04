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
}

Toitem.PropTypes = {
  content: PropTypes.string
}

export default Toitem
