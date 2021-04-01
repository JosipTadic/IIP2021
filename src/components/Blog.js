import React from 'react';
import {Link} from "react-router-dom"; 
import DisplayAllPosts from '../blog/DisplayAllPosts'
const Blog = () => {
   
  
  return (
      <div className="container">
          <DisplayAllPosts />
      </div>
  );
};

export default Blog;