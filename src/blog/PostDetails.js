import React from 'react';
import {useLocation, Link} from "react-router-dom"; 
const PostDetails = () => {  
  return (
    
    <div className="row">
        <div className="leftcolumn">
            <div className="card-post">
                <h2>titile</h2>
                <h5>ttile desc, date</h5>
                <div class="fakeimg" >Image</div>
                <p>some text...</p>
                <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>

            </div>
        </div>

        <div className="rightcolumn">
            <div className="card-post">
                <h2>About me</h2>
                <div className="fakeimg">Image</div>
                <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
            </div>
            <div className ="card-post">
                <h3>Popular Post</h3>
                    <div className="fakeimg">Image</div>
                    <div className="fakeimg">Image</div>
                    <div className="fakeimg">Image</div>
            </div>
            <div className="card-post"> 
                 <h3>Follow Me</h3>
                 <p>Some text..</p>
            </div>
        </div>
    </div>
    
  );
};

export default PostDetails;

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

*/