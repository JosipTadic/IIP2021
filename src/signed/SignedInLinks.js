import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {signOut} from '../store/actions/authActions';

const SignedInLinks = (props) => {
    
    return (
        
         <div className="navbar-blog" >
           <Link to="/blog">
              <button>All posts </button>
            </Link>
            <Link to="/create">
              <button>Create New Post</button> 
            </Link>
            <button onClick={props.signOut}>Log Out </button> 
            <p> Welcome back {props.profile.firstName}</p>
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