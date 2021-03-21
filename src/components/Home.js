
import React from 'react';
import './design.css';
import graph from '../images/graph.jpg';
const Home = () => {
   
  
  return (
     <div className="front">   
       <div className="center2">
        <h1 className="center__text glitch is-glitching" data-text="D-Wiz">D-Wiz</h1> 
        
         
      </div>
      <div className="container">

        <div className="second">
        <img src={graph} alt="graph" /> 
          <h1> About D-Wiz</h1>
          <p>tu nešto napisati čemu služi alat/website</p> 
        </div>
        <div className="third">
          <h1>Our tools</h1>
          <p> možda nekakav grid sa buttonom na svaki alat iz navbara</p>
        </div>
      </div>
      
       <footer>
         <p> Author: D-wiz magovi</p>
       </footer>
      
       </div> 
  );
};

export default Home;
//<img src={logo} alt="Logo" />   
/* <div className="first">
        
          <h1 className="logo"> D-Wiz</h1>
        <p className="p-tag"> Visualization tool but made it simple</p>
        </div>
        

        
        <div className="second">
          <h1> About D-Wiz</h1>
          <p>tu nešto napisati čemu služi alat/website</p> 
        </div>
        <div className="third">
          <h1>Our tools</h1>
          <p> možda nekakav grid sa buttonom na svaki alat iz navbara</p>
        </div> */