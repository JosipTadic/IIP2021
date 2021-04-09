import React from 'react';
import {Link} from "react-router-dom"; 
import DisplayAllPosts from '../blog/DisplayAllPosts'
import Post from '../blog/Post';
const Blog = () => {
   
  
  return (
    <div className = "container"> 
      <Post />
      <DisplayAllPosts />
      </div>
  );
};

export default Blog;