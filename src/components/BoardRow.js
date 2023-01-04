import React from 'react';
import {renderSquare} from '../helpers/BoardHelper';
import '../styles/Board.css';



function BoardRow(props) {
  //Carry over x and y value
  const x = props.x;

  //Bring in function that renders x amount of squares 
  const squares = renderSquare(x);

  return (
    <div className= "row">
      {squares}
    </div>
  );
}

export default BoardRow;
