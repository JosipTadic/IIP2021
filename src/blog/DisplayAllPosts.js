import React, { Component, useState, useEffect, useRef } from "react";
import PostList from "./PostList"
import useFetch from './useFetch'
import {connect} from 'react-redux' 

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
  return {
    projects: state.project.projects

  }

}

export default connect(mapStateToProps)(DisplayAllPosts);

  
// {blogs && <PostList blogs={blogs} />}
/* 
 { error && <div>{ error }</div> }
              { isPending && <div>Loading...</div> }
*/