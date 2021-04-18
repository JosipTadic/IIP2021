
import React from 'react';
import {Link} from "react-router-dom";
import './design.css';
import graph from '../images/graph.jpg'; 
import charts from '../images/charts.png'
const Home = () => {
   
  
  return (
     <div className="front">   
       <div className="center2">
        <h1 className="center__text glitch is-glitching" data-text="D-Wiz">D-Wiz</h1>      
      </div> 

        <div className="container">
          <div className="row">
            <div className="column-66">  
              <h1 className="large-font"><b>D-Wiz helps people see and understand data.</b></h1>
              <p className="home-p-tag">     Our visual analytics platform is transforming the way people use data to solve problems. 
                      Organizations of all sizes trust D-Wiz to help them be more data-driven.</p>
               
            </div>
            <div className="column-33">
             <img src={graph} alt="graph" /> 
            </div>
          </div>
        </div>

        
        <div className="container" >
          <div className="row">
            <div className="column-33">
             <img style={{height:"250px", width: "450px"}} src={charts} alt="charts" />
            </div>
            <div className="column-66" style={{marginLeft:"120px"}}>
              <h1 className="large-font"><b>Data, what?</b></h1>
              <h1 className="xlarge-font">Interested in data visualization? <br/> Learn more by reading our blogs</h1>  
                  <Link to="blog">
                    <button className="button-read">Read More</button> 
                  </Link>
            </div>
          </div>
        </div>  

       <footer>
         <p> Author: D-wiz magovi</p>
       </footer>
       
       </div> 
  );
};

export default Home;
 