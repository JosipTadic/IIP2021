import React from 'react'
import {useParams} from 'react-router-dom'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import {withRouter} from 'react-router-dom' 
import Post from './Post'
const PostDetails = ( props ) => { 
    const { project , auth} = props;  
    if(project) {
 
        return (
        <div className="container">    
        <Post />       
            <div className="blog-preview">
                <h2>Project title - { project.title }</h2>
                <p> {project.content}</p>             
            
                <span>author:{project.authorFirstName} {project.authortLastName}  </span>
                <h2 className="blog-details">date</h2>
            </div> 
        </div>
        )
     
    } else {
        return (
          <div className="container center">
            <p>Loading project...</p>
          </div>
        )
      }
    }
    const mapStateToProps = (state, ownProps) => {
        // console.log(state);
        const id = ownProps.match.params.id;
        const projects = state.firestore.data.projects;
        const project = projects ? projects[id] : null
        return {
          project: project
        }
      }
      
      export default compose(
        withRouter,
        connect(mapStateToProps),
        firestoreConnect([{
          collection: 'projects'
        }])
      )(PostDetails);

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