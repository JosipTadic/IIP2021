import React from 'react';
import {NavLink} from 'react-router-dom';

const SignedOutLinks = () => {
    return (
        
        <div>
            <NavLink to="/signup"><button>Sign Up </button></NavLink> 
            <NavLink to="/signin"> <button>Login </button></NavLink>  
            
        </div> 
    )

}
export default SignedOutLinks;