import React, { Component } from 'react'

class Toitem extends Component {
  render() {
    return <div onClick={this.handleDel.bind(this)}>{this.props.content}</div>
  }
  handleDel() {}
}

export default Toitem
