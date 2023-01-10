import React from 'react';
import {useState} from 'react';
import {BoardStone} from './BoardStone';
import '../styles/Board.css';

function BoardSquare(props) {
  //Carry over values from props
  const className = props.className;
  const x = props.x;
  const y = props.y;
  const placeStone = props.placeStone;
  const board = props.board;
  const piece = props.piece
  const player = props.player;
  //Find if piece has already been placed or not and disable onclick if so
  const placed = (board[y][x] !== "");
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
      {(hover && player === 1) &&
        <BoardStone img={piece.p1} x={x} y={y} className='stone hover'/>
      }
      {(hover && player === 2) &&
        <BoardStone img={piece.p2} x={x} y={y} className='stone hover'/>
      }

      {board[y][x] === 1 &&
        <BoardStone img={piece.p1} className='stone'/>
      }
      {board[y][x] === 2 &&
        <BoardStone img={piece.p2} className='stone'/>
      }
    </div>
  );
}

export {BoardSquare};
