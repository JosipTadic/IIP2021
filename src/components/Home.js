
import React from 'react';
import {Link} from "react-router-dom";
import './design.css';
import graph from '../images/graph.jpg';
import area from '../images/area-chart.png'
import bar from '../images/bar-chart.png'
import line from '../images/line-chart.png'
import composed from '../images/composed-chart.png'
import charts from '../images/charts.jpg'
const Home = () => {
   
  
  return (
     <div className="front">   
       <div className="center2">
        <h1 className="center__text glitch is-glitching" data-text="D-Wiz">D-Wiz</h1>        
         
      </div>


      <div className="container">
      <div className="row">
            <div className="column-33">
              <img src={graph} alt="graph" /> 
             </div> 
             <div className="column-66">
              <h1 className="xlarge-font"><b> About D-Wiz</b></h1> 
              <p><span >tu nešto napisati čemu služi alat/website </span></p>
              <Link to="about">
                <button className="button">Read More</button> 
              </Link>
              
            </div>
          </div> 
          </div>

          <div className="container">
          <div className="row">
                <div className="column-33">
                <img src={charts} alt="charts" />  
                </div> 
                <div className="column-66">
                  <h1 className="xlarge-font"><b> Learn about data visualization </b></h1> 
                  <p><span >tu nešto napisati čemu služi alat/website </span></p>
                  <Link to="blog">
                    <button className="button">Read More</button> 
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


        /*   <div className="third">
          <h1 className="third-title">Our tools</h1>
         
          <div className="row">
            <div className="column">
              <div className="card">
              <h3>Area Chart</h3> 
              <div className="percent-50 icon">
                      <img src={area} alt="area" />
              </div>
              <div className="percent-50">
                <p>Area charts are used to represent cumulated totals using numbers or percentages (stacked area charts in this case) over time.
                  Use the area chart for showing trends over time among related attributes.</p>  
                  </div> 
                <Link to="/area">
                  <button className="button">Go to the tool</button> 
                </Link> 
                </div>
            </div> 
 
          <div class="column">
            <div class="card img-fluid">
            <img src={line} alt="line" className="card-img-top" /> 
              <div className="card-img-overlay"> 
              <h3>Line Chart</h3> 
              <p className="card-img-text"> A line chart is often used to visualize a trend in data over 
                intervals of time – a time series – thus the line is often drawn chronologically. </p>
              
              <Link to="/line">
                <button className="button">Go to the tool</button> 
              </Link>  
              </div> 
            </div>
          </div> 
 
          <div class="column">
            <div class="card img-fluid">
            <img src={bar} alt="bar" className="card-img-top" /> 
              <div className="card-img-overlay"> 
              <h3>Bar Chart</h3> 
              <p className="card-img-text">A bar chart is a chart that presents categorical data with rectangular bars with heights or lengths proportional to the
                 values that they represent. The bars can be plotted vertically or horizontally. </p> 
              <Link to="/bar">
                <button className="button">Go to the tool</button> 
              </Link>  
              </div> 
            </div>
          </div> 
          
          <div class="column">
            <div class="card img-fluid">
            <img src={composed} alt="composed" className="card-img-top" /> 
              <div className="card-img-overlay"> 
              <h3>Composed Chart</h3> 
              <p className="card-img-text"> Used to combine multiple chart types like bar and line</p> 
              <Link to="/composed">
                <button className="button">Go to the tool</button> 
              </Link>  
              </div> 
            </div>
          </div>
        </div>      */