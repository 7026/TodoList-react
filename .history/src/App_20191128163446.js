import React, { Component, Fragment } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
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
        <TransitionGroup>
          {this.state.list.map((item, index) => {
            return (
              <CSSTransition
                unmountOnExit
                in={this.state.show}
                timeout={1000}
                classNames="fade"
                onEntered={el => {
                  el.style.color = 'blue'
                }}
                appear={true}
                key={index}
              >
                <div>{item}</div>
              </CSSTransition>
            )
          })}
        </TransitionGroup>
        <button onClick={this.handleAddItem}>toggle</button>
      </Fragment>
    )
  }
  handleToggle() {
    this.setState({
      show: this.state.show ? false : true
    })
  }
  handleAddItem() {
    this.setState(prevState => {
      return {
        list: [...prevState.list, 'item']
      }
    })
  }
}
