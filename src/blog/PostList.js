import {Link} from "react-router-dom"; 
import PostSum from "./PostSum";

const PostList = ({projects}) => {
    return (
      <div className="blog-list"> 
         
        { projects && projects.map(project => {
        return (
          <Link to={'/blogs/'+ project.id} key={project.id}> 
            <PostSum project={project}    />
          </Link>
        )
      })}  
      </div>
    );
  }
   
  export default PostList;