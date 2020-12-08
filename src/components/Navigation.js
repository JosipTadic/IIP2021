import React from 'react';
import './design.css';
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
      
           <div className ="design">               
                <NavLink to="/">Home</NavLink>      
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact" >Contact</NavLink>
                <NavLink to="/d3">Page for d3</NavLink>
          
           </div>
    );
}
 
export default Navigation;