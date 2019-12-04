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
    const { handleDelItem, index, test } = this.props
    console.log(test)
    handleDelItem(index)
  }
}

Toitem.propTypes = {
  test: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  handleDelItem: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
}
Toitem.defaultProps = {
  test: 'hello World'
}

export default Toitem
