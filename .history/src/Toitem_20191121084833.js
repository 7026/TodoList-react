import React, { Component } from 'react'

class Toitem extends Component {
  constructor() {}
  render() {
    return <div onClick={this.handleDel.bind(this)}>{this.props.content}</div>
  }
  handleDel() {
    console.log(this.props.index)
  }
}

export default Toitem
