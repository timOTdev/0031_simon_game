import React from 'react';

const Button = (props) => {
  return (
    <button className={"button" + props.index} id={props.color}>
      {props.index}
    </button>
  )
}
export default Button