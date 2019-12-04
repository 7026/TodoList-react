import React, { Component, Fragment } from 'react'
import { CSSTransition } from 'react-transition-group'
import './style.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true
    }
    this.handleToggle = this.handleToggle.bind(this)
  }

  render() {
    return (
      <Fragment>
        {/* unmountOnExit  隐藏时消除dome */}
        <CSSTransition
          unmountOnExit
          in={this.state.show}
          timeout={1000}
          classNames="fade"
          onEntered={el => {
            el.style.color = 'blue'
          }}
          appear={true}
        >
          <div>hello</div>
        </CSSTransition>
        <button onClick={this.handleToggle}>toggle</button>
      </Fragment>
    )
  }
  handleToggle() {
    this.setState({
      show: this.state.show ? false : true
    })
  }
}
