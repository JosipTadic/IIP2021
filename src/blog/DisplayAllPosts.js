import React, { Component} from "react";
import PostList from "./PostList" 
import {connect} from 'react-redux' 
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux' 

class DisplayAllPosts extends Component {
  render() {  
  
  const {projects} = this.props;
 // if (!auth.uid) return <Redirect to='/signin' />
    return(
      <div className="home">
         
             <PostList projects={projects} />
              
    </div>
    ) 

  }

}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth

  }

}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'projects',
    orderBy: ["createdAt", "desc"]
  }])
)(DisplayAllPosts);
 