import React from 'react';
import {useState} from 'react';
import {player1,player2} from './PlayerData';
import {PlayerPieceScreen} from './PlayerPieceScreen';
import {PlayerSpriteScreen} from './PlayerSpriteScreen';
import '../../styles/Player.css';

function PlayerScreen(props) {
  const p=props.p;
  
  return (
    <div className="playerScreen">
          <input type="text" className="name" defaultValue={p.name}/>
          <PlayerSpriteScreen player={p} currentS={props.currentS} setCurrentS={props.setCurrentS}/>
          <PlayerPieceScreen player={p} currentP={props.currentP} setCurrentP={props.setCurrentP}/>
    </div>
  );
}

export {PlayerScreen};
