import React, { Component, Fragment } from 'react'
import { CSSTransition } from 'react-transition-group'
import './style.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
    this.handleToggle = this.handleToggle.bind(this)
    this.handleAddItem = this.handleAddItem.bind(this)
  }

  render() {
    return (
      <Fragment>
        <div>hello</div>
        <button onClick={this.handleAddItem}>toggle</button>
      </Fragment>
    )
  }
  handleToggle() {
    this.setState({
      show: this.state.show ? false : true
    })
  }
}
