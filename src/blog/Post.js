import React from "react";
import {Link} from "react-router-dom"; 
import PostDetails from "./PostDetails";

const Post = ({ title, content, editPost, id, deletePost }) => {
    {console.log()}
  return (
    <>

        <div className="blog-card">
            <div className="meta">
           <div className="blogPhoto" />
            <ul className="details">
                <li className="author">John Doe</li>
                <li className="date">Aug. 24, 2015</li>
                <li className="tags">
                <ul>
                    <li>Learn</li>
                    <li>Code</li> 
                </ul>
                </li>
            </ul>
            </div>


            <div className="description">
            <h1>{ title }</h1>
            <p> {content} </p> 
            <Link to={{
                    pathname: `/code/${id}`,
                    state: { id: id }
                }} 
                 >
                     <button onClick={() => PostDetails(id)} className='read-more' >Read more</button>
                    {console.log("postDetail-button")}
            </Link>
            </div>
        </div>
    
    
    </>
  );
};
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