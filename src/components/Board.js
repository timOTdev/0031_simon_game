import React, { Component } from 'react'

import Button from './Button'

class Board extends Component {
  createButton = (color, index) => {
    return(
      <Button
        color={color}
        index={index}
        lightUp={this.props.lightUp}
        userMoveCheck={this.props.userMoveCheck}
      />
    )
  }

  render() {
    return (
      <div className="Board">
        {this.createButton("green", 1)}
        {this.createButton("red", 2)}
        {this.createButton("yellow", 3)}
        {this.createButton("blue", 4)}
      </div>
    )
  }
}
export default Board