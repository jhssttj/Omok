import React from 'react';
import {useState} from 'react';
import {initializeBoard} from '../helpers/BoardHelper';
import {BoardRow} from './BoardRow';
import '../styles/Board.css';



function Board() {
  //Intialize Board X and Y Size (Played on 15x15)
  const x = 15;
  const y = 15;

  //Initalize Board Array
  const boardArr = initializeBoard(x,y);

  //Set Board To Empty Array 
  const [board, setBoard] = useState(boardArr);


  return (
    <div className= "board">
      {BoardRow}
    </div>
  );
}

export default Board;
