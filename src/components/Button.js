import React, {Component} from 'react';

class Button extends Component {
  lightHandler = (e, index) => {
    e.preventDefault()
    this.props.lightUp(index)
    this.props.userMoveCheck(index)
  }

  render() {
    return (
      <button className={"button" + this.props.index} id={this.props.color} onClick={(e) => this.lightHandler(e, this.props.index)}>
        {this.props.index}
      </button>
    )
  }
}

export default Button