import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {signOut} from '../store/actions/authActions';

const SignedInLinks = (props) => {
    
    return (
        
         <div>
            <NavLink to="/"><button>New Project</button></NavLink> 
            <button onClick={props.signOut}>Log Out </button> 
            <p>Welcome back {props.profile.initials}</p>
        </div> 
    )

}

const mapDispatchToProps = (dispatch) => {
    return {
      signOut: () => dispatch(signOut())
    }
  }

export default connect(null, mapDispatchToProps)( SignedInLinks);

// <NavLink to="/"> Welcome back {props.profile} </NavLink> 