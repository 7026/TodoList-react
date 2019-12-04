import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Test extends Component {
  render() {
    return <div>{this.props.content}</div>
  }
}

Test.propTypes = {}

export default Test
