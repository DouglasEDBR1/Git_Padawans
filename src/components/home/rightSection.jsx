import React from 'react';
import Box from '../box/box';
import Navbar from '../navbar/navbar';
import './rightSection.css';

function RightSection() {
    return (
      
          <div id="right_section">  
            <Navbar></Navbar>
              <div id="box_wrapper">
                <h2 className="right_title">Solicitações de reciclagens</h2>
                <Box></Box>
                <br></br>
                <Box></Box>
                <br></br>
                <Box></Box>
                <br></br>
              </div>
          </div>
      
    );
  }

  export default RightSection;