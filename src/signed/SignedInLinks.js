import React from 'react';
import {NavLink} from 'react-router-dom';

const SignedInLinks = () => {
    return (
        
         <div>
            <NavLink to="/"><button>New Project</button></NavLink> 
            <NavLink to="/"> <button>Log Out </button></NavLink> 
            <NavLink to="/"> <button> NN</button></NavLink> 
            
        </div> 
    )

}
export default SignedInLinks;