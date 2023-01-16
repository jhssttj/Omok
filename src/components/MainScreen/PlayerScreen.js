import React from 'react';
import {useState} from 'react';
import {player1,player2} from './PlayerData';
import {PlayerPieceScreen} from './PlayerPieceScreen';
import {PlayerSpriteScreen} from './PlayerSpriteScreen';
import '../../styles/Player.css';

function PlayerScreen() {
  
  const [p1, setP1] = useState(player1);
  const [p2, setP2] = useState(player2);
  

  return (
    <div>
      <form>
        <label>
          Name:
          <input type="text" name="name" defaultValue={p1.name}/>
        </label>
        <label>
          Sprite:
          <PlayerSpriteScreen player={1}/>
        </label>
        <label>
          Piece:
          <PlayerPieceScreen player={1}/>
        </label>
      </form>
    </div>
  );
}

export default PlayerScreen;
