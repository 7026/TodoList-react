import React, { Component, Fragment } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true
    }
  }

  render() {
    return (
      <Fragment>
        <div className="">hello</div>
        <button>toggle</button>
      </Fragment>
    )
  }
}
