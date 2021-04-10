import {Link} from "react-router-dom"; 
import PostDetails from "./PostDetails";

const PostList = ({projects}) => {
    return (
      <div className="blog-list"> 
         
        { projects && projects.map(project => {
        return (
          <PostDetails project={project} key={project.id}  />
        )
      })}  
      </div>
    );
  }
   
  export default PostList;