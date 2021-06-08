import React from 'react' 
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import {withRouter} from 'react-router-dom' 
import Post from './Post'
const PostDetails = ( props ) => { 
    const { project } = props;  
    if(project) {
 
        return (
        <div className="container">    
        <Post />      
             
            <div className="blog-preview">

                <div class="blogPhoto" dangerouslySetInnerHTML={{ __html: project.image }}/> <br/>
                 <h1 className="center-post-text"> {project.title}</h1>    <br/>
                 <div dangerouslySetInnerHTML={{ __html: project.content }} />         

                <div className="imgHolder"> <img  src={project.image} alt=""/>  </div>  
                 <h1 className="center-post-text"> {project.title}</h1>    
                <p> {project.content}</p>             

            
            <div className="blog-details">
                <span>Created by: {project.authorFirstName} {project.authortLastName}  </span> <br/>
                <span>Created at: {project.createdAt.toDate().toDateString()}</span>
            </div>
                
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