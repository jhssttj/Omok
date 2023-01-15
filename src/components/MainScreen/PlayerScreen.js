import React from 'react';
import {useState} from 'react';
import {player1,player2} from './PlayerData';
import {PlayerPieceScreen} from './PlayerPieceScreen';

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
          Piece:
          <PlayerPieceScreen/>
        </label>
      </form>
    </div>
  );
}

export default PlayerScreen;
