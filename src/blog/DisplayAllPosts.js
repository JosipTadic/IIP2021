import React, { Component, useState, useEffect, useRef } from "react";
import PostList from "./PostList"
import useFetch from './useFetch'
import {connect} from 'react-redux' 
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'

class DisplayAllPosts extends Component {
  render() {

 // const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')
  
  const {projects} = this.props;
  
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
    projects: state.firestore.ordered.projects

  }

}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'projects'}
  ])
)(DisplayAllPosts);

  
// {blogs && <PostList blogs={blogs} />}
/* 
 { error && <div>{ error }</div> }
              { isPending && <div>Loading...</div> }
*/