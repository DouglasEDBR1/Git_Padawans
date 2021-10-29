import React from 'react';
import LeftSection from './leftSection';
import RightSection from './rightSection';

import "./home.css";

function Home() {
  return (
    <div id="container">
      <LeftSection></LeftSection>
      <RightSection></RightSection>
      
    </div>
    
  );
}

export default Home;