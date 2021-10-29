import React from 'react'; 
import imgTwo from '../icons/2.png';
import imgThree from '../icons/3.png';
import imgFour from '../icons/4.png';
import imgFive from '../icons/5.png';
import imgSix from '../icons/6.png';

import './leftSection.css';

function LeftSection() {
    return (
      <div id = "left_section">
          <h1 className="menu_logo">Re-cycle</h1>
          <div id="menu_group">
            <br></br>
            <p className="menu_inicio">Início</p>
            <br></br>
          <div className="menu_item">
            <img className="menu_icons" src={imgTwo} alt=""></img>
            <p className="menu_title">Solicitações de reciclagens</p>
          </div>
          <div className="menu_item">
            <img className="menu_icons" src={imgThree} alt=""></img>
            <p className="menu_title">Centros de reciclagens</p>
          </div> 
          <div className="menu_item">
            <img className="menu_icons" src={imgFour} alt=""></img>
            <p className="menu_title">Novidades</p>
          </div>
            
          </div>
          <div id="menu_footer">
            <div className="menu_item">
              <img className="menu_icons" src={imgFive} alt=""></img>
              <p className="menu_title">Chamadas e ajuda</p>
            </div>
            <div className="menu_item">
              <img className="menu_icons" src={imgSix} alt=""></img>
              <p className="menu_title">Políticas de conteúdo</p>
            </div>
          </div>
      </div>
    );
  }

  export default LeftSection;
