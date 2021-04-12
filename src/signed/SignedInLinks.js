import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {signOut} from '../store/actions/authActions';

const SignedInLinks = (props) => {
    
    return (
        
         <div>
            <Link to="/create">
              <button>Create New Post</button> 
            </Link>
            <button onClick={props.signOut}>Log Out </button> 
            <h3>Welcome back {props.profile.initials}</h3>
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