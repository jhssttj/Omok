import React from 'react';
import {PlayerPieceScreen} from './PlayerPieceScreen';
import {PlayerSpriteScreen} from './PlayerSpriteScreen';
import '../../styles/Player.css';

function PlayerScreen(props) {
  const p=props.p;
  
  return (
    <div className="playerScreen">
          <h1 type="text" className="name">{p.name}</h1>
          <PlayerSpriteScreen player={p} currentS={props.currentS} setCurrentS={props.setCurrentS} start={props.start}/>
          <PlayerPieceScreen player={p} currentP={props.currentP} setCurrentP={props.setCurrentP} start={props.start}/>
    </div>
  );
}

export {PlayerScreen};
