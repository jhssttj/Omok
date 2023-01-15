import React from 'react';
import '../../styles/Board.css';

function BoardPiece(props) {
  //Carry over values from props
  const img = props.img;
  const className = props.className;
  const x = props.x;
  const y= props.y;
  return (
    <img src={img} alt='p1' className={className} x={x} y={y}/>
  );
}

export {BoardPiece};
