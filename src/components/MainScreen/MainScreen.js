import React from 'react';
import '../../styles/Player.css';
import {PlayerScreen} from './PlayerScreen';
import {ThemeScreen} from './ThemeScreen';

function MainScreen() {
  

  

  return (  
          <div className="startScreen">
          <PlayerScreen/>
          <ThemeScreen/>
          <PlayerScreen/>
          </div>
  );
}

export default MainScreen;
