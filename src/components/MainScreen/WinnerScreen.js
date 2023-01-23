import React from 'react';
import {PlayerPieceScreen} from './PlayerPieceScreen';
import {PlayerSpriteScreen} from './PlayerSpriteScreen';
import '../../styles/Player.css';

function WinnerScreen(props) {
  const p=props.p;
  
  return (
    <div className="winnerScreen">
          <h1 type="text" className="winnerHeading">Winner</h1>
          <div className="spriteHolder">
          <img src={props.sprite} alt='pieceImage' className="imageSprite"/>
        </div>
          <h1 type="text" className="winnerHeading">{'Player 1'}</h1>
    </div>
  );
}

export {WinnerScreen};
