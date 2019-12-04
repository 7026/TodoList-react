import React, { Component } from 'react'

class Toitem extends Component {
  constructor(props) {
    super(props)
    this.handleDel = this.handleDel.bind(this)
  }
  render() {
    return <div onClick={this.handleDel}>{this.props.content}</div>
  }
  handleDel() {
    this.props.handleDelItem(this.props.index)
  }
}

export default Toitem
