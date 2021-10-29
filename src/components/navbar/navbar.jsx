import React from 'react';

import "./navbar.css"

import User_img from '../api/img_user.png';
import Maximize from '../icons/maximize.png';

function Navbar() {
  return (
    
        <div id="navbar">  
            <input id="navbar_input" type="text" placeholder="Pesquisar"></input>
            <div id="navbar_user">
              <img id="img_user" src={User_img} alt="user imagem" />
              <span id="name_user">Mike Santana</span>
              <img id="navbar_icon" src={Maximize} alt="icon"/>
            </div>
        </div>
    
  );
}

export default Navbar;