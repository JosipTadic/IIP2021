import React from 'react';
import {Link} from "react-router-dom"; 
import DisplayAllPosts from '../blog/DisplayAllPosts'
const Blog = () => {
   
  
  return (
    <div className = "container"> 
      <div className="navbar-blog"> 
          <div className="links"> 
               <Link to="blog">
                    <button><h1>All posts</h1></button> 
                  </Link>
              <Link to="create">
                    <button>Create New Post</button> 
                  </Link>
              </div>
         
      </div> 
      <DisplayAllPosts />
      </div>
  );
};

export default Blog;