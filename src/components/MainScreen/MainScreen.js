import React from 'react';
import '../../styles/Player.css';
import {PlayerScreen} from './PlayerScreen';
import {ThemeScreen} from './ThemeScreen';
import {TopBar} from './TopBar';
import {BottomBar} from './BottomBar';

function MainScreen() {
  

  

  return (  
      <div className="mainScreen">
          <TopBar/>
          <div className="startScreen">
          <PlayerScreen/>
          <ThemeScreen/>
          <PlayerScreen/>
          </div>
          <BottomBar/>
      </div>
  );
}

export default MainScreen;
