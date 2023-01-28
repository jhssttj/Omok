import React from 'react';
import '../../styles/Player.css';
import logo from '../../images/logo/logo.png'

function TopBar(props) {

  return (  
    <div className="TopBar">
      <div className="title">
        <img className="logo" src={logo} alt="logo"/>
        <p className="topText">Maplestory Omok</p>
      </div>
    </div>
  );
}

export {TopBar};
