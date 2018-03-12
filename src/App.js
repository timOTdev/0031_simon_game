import React, { Component } from 'react'

import Board from './components/Board'
import Options from './components/Options'
import green from './sounds/green.wav'
import red from './sounds/red.wav'
import yellow from './sounds/yellow.wav'
import blue from './sounds/blue.wav'
import mistake from './sounds/mistake.wav'
import restart from './sounds/restart.wav'

class App extends Component {
  constructor() {
    super()
    this.state = {
      memorySequence: [],
      userSequence: [],
      level: null,
      gameStarted: false,
      strictMode: false
    }
  }

  playSound = (item) => {
    switch (item) {
      case 1:
        new Audio(green).play()
        break
      case 2:
        new Audio(red).play()
        break
      case 3:
        new Audio(yellow).play()
        break
      case 4:
        new Audio(blue).play()
        break
      case "mistake":
        new Audio(mistake).play()
        break
      case "restart":
        new Audio(restart).play()
        break
      default:
        break
    }
  }

  lightUp = (item) => {
    let tile = document.querySelector(`.button${item}`)
    tile.classList.add("lit")
    this.playSound(item)

    setTimeout(function() { 
      tile.classList.remove("lit")
    }, 300)
  }

  animate = (memorySequence) => {
    var i = 0
    var interval = setInterval(() => {
        this.lightUp(memorySequence[i])

        i++
        if (i >= memorySequence.length) {
            clearInterval(interval)
        }
   }, 600)
  }

  userMoveCheck = (index) => {
    const {level, strictMode} = this.state
    if (level <= 19) {
      let memorySequence = [...this.state.memorySequence]
      let userSequence = [...this.state.userSequence]
      userSequence.push(index)
      this.setState({ userSequence })
      let result = this.checkSequences(memorySequence, userSequence)
      if (result !== null) {
        if (!strictMode && result === true) {
          this.makeSequence()
        } 
        else if (!strictMode && result === false) {
          this.playSound("mistake")
          setTimeout(() => {
            this.animate(memorySequence)
          }, 1500)
        }
        else if (strictMode && result === true) {
          this.makeSequence()
        }
        else if (strictMode && result === false) {
          this.restartGame()
        }
      }
    }
  }

  checkSequences = (memorySequence, userSequence) => {
    let tracker = null
    if (userSequence.length !== 0 && memorySequence.length !== 0) {
      for (let index in userSequence) {
        if (userSequence[index] !== memorySequence[index]) {
          userSequence = []
          this.setState({ userSequence })
          tracker = false
        }
        else if (userSequence.length === memorySequence.length && userSequence[index] === memorySequence[index]) {
          tracker = true
        } 
      }
    } 
    return tracker
  }

  makeSequence = () => {
    let { level } = this.state
    if (level <= 19) {
      let userSequence = [...this.state.userSequence]
      let memorySequence = [...this.state.memorySequence]
      let randomNumber = Math.floor(Math.random()*4) + 1
      let {level} = this.state
      userSequence = []
      memorySequence.push(randomNumber)
      level = memorySequence.length
      this.animate(memorySequence)
      this.setState({ memorySequence, userSequence, level})
    }
  }
  
  startGame = () => {
    if (!this.state.gameStarted) {
      this.setState({ gameStarted: true })
      this.makeSequence()
    }
  }
  
  setStrictMode = () => {
    this.setState({ strictMode: !this.state.strictMode })
  }
  
  restartGame = () => {
    let userSequence = [...this.state.userSequence]
    let memorySequence = [...this.state.memorySequence]
    let {level} = this.state
    memorySequence = []
    userSequence = []
    level = null
    this.setState({ memorySequence, userSequence, level })
    this.playSound("restart")
    setTimeout(() => {
      this.makeSequence()
    }, 4000)
  }

  render() {
    return (
      <div className="App">
        <h1>Sensational Simon Game</h1>
        <h2><span className="amatic">Level:</span> {this.state.level}</h2>
        <Board 
          lightUp={this.lightUp}
          userMoveCheck={this.userMoveCheck}
        />
        <Options 
          {...this.state}
          startGame={this.startGame}
          setStrictMode={this.setStrictMode}
          restartGame={this.restartGame}
        />
      </div>
    )
  }
}

export default App
