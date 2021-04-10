import React from 'react';
import {useParams, useHistory} from "react-router-dom"; 
import Post from './Post';
import useFetch from "./useFetch";

const PostDetails = ({project}) => {  
    
  return (
      <div className="container">
       
       <div className="blog-details">
        <span className="card-title ">{project.title}</span>
        </div>
    </div>
    )
}
export default PostDetails;

/*  
  const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
          method: 'DELETE'
        }).then(() => {
          history.push('/blog');
        }) 
      }


       { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                <h2>{ blog.title }</h2>
                <p>Written by { blog.author }</p>
                <div>{ blog.body }</div>
                <button onClick={handleClick}>delete</button>
                </article>
            )}

*/