import React, { Component } from 'react'

class Options extends Component {
  startHandler = (e) => {
    e.preventDefault()
    this.props.startGame()
  }

  strictHandler = (e) => {
    e.preventDefault()
    this.props.setStrictMode()
  }

  restartHandler = (e) => {
    e.preventDefault()
    this.props.restartGame()
  }

  render() {
    return (
      <div className="Options">
        <button className="start" onClick={(e) => this.startHandler(e)}>Start</button>
        <button className="strictButton" onClick={(e) => this.strictHandler(e)}>Strict Mode</button>
        <button className="restartButton" onClick={(e) => this.restartHandler(e)}>Restart</button>
      </div>
    )
  }
}
export default Options