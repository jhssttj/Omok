import React from 'react';
import {useState} from 'react';
import {BoardStone} from './BoardStone';
import '../styles/Board.css';
import piece1 from '../images/piece-black.png'
import piece2 from '../images/piece-white.png'

function BoardSquare(props) {
  //Carry over values from props
  const className = props.className;
  const x = props.x;
  const y = props.y;
  const placeStone = props.placeStone;
  const board = props.board;
  //Find if piece has already been placed or not and disable onclick if so
  const placed = board[y][x] !== "";
  //Set hover state to render pre-placed stone location
  const [hover, setHover] = useState(false);

  return (
    <div 
    className={className} 
    x={x} 
    y={y} 
    onClick={placed? ()=>{} : (event)=>placeStone(event)}
    onMouseEnter={()=>setHover(true)}
    onMouseLeave={()=>setHover(false)}
    >
      {hover &&
        <BoardStone img={piece1} x={x} y={y} className='stone hover'/>
      }

      {board[y][x] === 1 &&
        <BoardStone img={piece1} className='stone'/>
      }
      {board[y][x] === 2 &&
        <BoardStone img={piece2} className='stone'/>
      }
    </div>
  );
}

export {BoardSquare};
