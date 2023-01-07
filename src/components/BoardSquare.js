import React from 'react';
import {useState} from 'react';
import '../styles/Board.css';
import {placeStone} from '../helpers/BoardHelper';

function BoardSquare(props) {
  //Declare if square is empty or have a stone
  const [val, setVal] = useState("");
  
  //Carry over values from props
  const className = props.className;
  const x = props.x;
  const y = props.y;
  
  return (
    <div className={className} x={x} y={y} onClick={(event)=>{placeStone(event,setVal)}}>
      {val}
    </div>
  );
}

export {BoardSquare};
