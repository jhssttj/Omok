import React from 'react';
import {PlayerPieceScreen} from './PlayerPieceScreen';
import {PlayerSpriteScreen} from './PlayerSpriteScreen';
import '../../styles/Player.css';

function WinnerScreen(props) {
  const wonPlayer =props.winner[0];
  const wonSprite =props.winner[1];
  
  return (
    <div className="winnerScreen">
          <h1 type="text" className="winnerHeading">Winner</h1>
          <div className="spriteHolder">
          <img src={wonSprite} alt='pieceImage' className="imageSprite"/>
        </div>
          <h1 type="text" className="winnerHeading">{wonPlayer}</h1>
    </div>
  );
}

export {WinnerScreen};
