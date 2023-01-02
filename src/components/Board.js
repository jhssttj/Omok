import React from 'react';
import {useState} from 'react';
import {initializeBoard} from '../helpers/BoardHelper';



function Board() {

  //Initalize Board Array (Played on 15x15)
  const boardArr = initializeBoard(15,15);



  //Set Board To Empty Array 
  const [board, setBoard] = useState(boardArr);

  return (
    <div className= "Board">
  
    </div>
  );
}

export default Board;
