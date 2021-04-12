import React from 'react';
import {NavLink, Link} from 'react-router-dom';

const SignedOutLinks = () => {
    return (
        
        <div>
            <Link to="/blog">
              <button>All posts </button>
            </Link>
            <NavLink to="/signup"><button>Sign Up </button></NavLink> 
            <NavLink to="/signin"><button>Login </button></NavLink>  
            
        </div> 
    )

}
export default SignedOutLinks;