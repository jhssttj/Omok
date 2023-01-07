import React from 'react';
import {useState} from 'react';
import '../styles/Board.css';

function BoardSquare(props) {
  //Declare if square is empty or have a stone
  const [val, setVal] = useState("");
  
  //Carry over values from props
  const className = props.className;
  const x = props.x;
  const y = props.y;
  const placeStone = props.placeStone;
  
  return (
    <div className={className} x={x} y={y} onClick={(event)=>{placeStone(event)}}>
      {val}
    </div>
  );
}

export {BoardSquare};
