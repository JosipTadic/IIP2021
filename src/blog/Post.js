import React from "react";
import {Link} from "react-router-dom"; 
import PostDetails from "./PostDetails";
import DisplayAllPosts from '../blog/DisplayAllPosts'
import Blog from "../components/Blog";

const Post = () => { 
  return (
    <div className="navbar-blog"> 
    <div className="links"> 
        <Link to="/blog">
              <button>All posts</button> 
        </Link>
        <Link to="/create">
              <button>Create New Post</button> 
        </Link>
        </div>
   
</div> 
  )
}
export default Post;

/*


<div className="row">
        <div className="col s12 m6"> 
        <div className="card blue-grey darken-1">
         <div class="blogPhoto" /> 
            <div className="card-content white-text">
            <span className="card-title">{title}</span>
            <p> {content} </p>
            </div>
            <div className="card-action">
                <button onClick={() => editPost(id)}>Edit</button>
                <button onClick={() => deletePost(id)}>Delete</button>
            </div>
        </div>
        </div>
    </div>

<div class="blog-card">
    <div class="meta">
      <div class="photo" style="background-image: url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)"></div>
      <ul class="details">
        <li class="author"><a href="#">John Doe</a></li>
        <li class="date">Aug. 24, 2015</li>
        <li class="tags">
          <ul>
            <li><a href="#">Learn</a></li>
            <li><a href="#">Code</a></li>
            <li><a href="#">HTML</a></li>
            <li><a href="#">CSS</a></li>
          </ul>
        </li>
      </ul>
    </div>


    <div class="description">
      <h1>Learning to Code</h1>
      <h2>Opening a door to the future</h2>
      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
      <p class="read-more">
        <a href="#">Read More</a>
      </p>
    </div>
  </div>


  <Route exact path="/code/:id">
          <div>
              <PostDetails/>
          </div>
        </Route>

    */