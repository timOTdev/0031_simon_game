import React, { Component } from 'react'

import Board from './components/Board'
import Options from './components/Options'

class App extends Component {
  constructor() {
    super()
    this.state = {
      sequence: [],
      level: 1,
      gameStarted: false,
      isPlayerTurn: false,
    }
  }

  makeSequence = () => {
    let sequence = [...this.state.sequence]
    let randomNumber = Math.floor(Math.random()*4) + 1
    sequence.push(randomNumber)
    this.setState({ sequence, isPlayerTurn: true })
  }

  startGame = () => {
    console.log("Game started")
    this.makeSequence()
  }

  setStrictMode = () => {
    console.log("Set Strict Mode")
  }

  restartGame = () => {
    console.log("Restart game")
  }

  render() {
    return (
      <div className="App">
        <h1>Simon Game</h1>
        <Board />
        <h2>Level: {this.state.level}</h2>
        <Options 
          startGame={this.startGame}
          setStrictMode={this.setStrictMode}
          restartGame={this.restartGame}
        />
      </div>
    )
  }
}

export default App
