import React, { Component } from 'react'

import click from '../sounds/click.wav'

class Options extends Component {
  startHandler = (e) => {
    e.preventDefault()
    new Audio(click).play()
    this.props.startGame()
  }
  
  strictHandler = (e) => {
    e.preventDefault()
    new Audio(click).play()
    this.props.setStrictMode()
  }
  
  restartHandler = (e) => {
    e.preventDefault()
    new Audio(click).play()
    this.props.restartGame()
  }

  render() {
    return (
      <div className="Options">
        <button className="start" onClick={(e) => this.startHandler(e)}>Start</button>
        <button className={this.props.strictMode ? "strictButton strict" : "strictButton"} onClick={(e) => this.strictHandler(e)}>Strict Mode</button>
        <button className="restartButton" onClick={(e) => this.restartHandler(e)}>Restart</button>
      </div>
    )
  }
}
export default Options