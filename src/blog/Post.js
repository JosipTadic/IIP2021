import React from "react"; 
import SignedInLinks from '../signed/SignedInLinks'
import SignedOutLinks from "../signed/SignedOutLinks";
import {connect} from 'react-redux'

const Post = (props) => { 
  const {auth, profile} = props;
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />
  return (
    <div className="navbar-blog">  
         
        {links}       
         
    </div> 
  )
}

const mapStateToProps = (state) => { 
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}
export default connect(mapStateToProps)(Post);
 