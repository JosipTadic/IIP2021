import React from 'react' 
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import {withRouter} from 'react-router-dom'  
import { Redirect } from "react-router-dom";
import Post from './Post'
import { Component } from 'react' 
class PostDetails extends Component{

  handleClick = () => {
    const { firestore, id } = this.props;
    firestore.delete({ collection: "projects", doc: id });
    this.props.history.push("/blog");
  };
 
  render() {
    const { project, id, auth } = this.props;
    //if (!auth.uid) return <Redirect to="/signin" />;   
    if(project) {
 
        return (
        <div className="container">    
        <Post />      
             
            <div className="blog-preview">

                <div class="blogPhoto" dangerouslySetInnerHTML={{ __html: project.image }}/> <br/>
                 <h1 className="center-post-text"> {project.title}</h1>    <br/>
                 <div dangerouslySetInnerHTML={{ __html: project.content }} />            
                
            
            <div className="blog-details">
                <span>Created by: {project.authorFirstName} {project.authortLastName}  </span> <br/>
                <span>Created at: {project.createdAt.toDate().toDateString()}</span>
            </div> 
            </div> 
            {project.authorId === auth.uid && (
              <button className="login" onClick={this.handleClick}>
                Izbriši članak 
              </button>
            )} 
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
  }
    const mapStateToProps = (state, ownProps) => {
         console.log(state);
        const id = ownProps.match.params.id;
        const projects = state.firestore.data.projects;
        const project = projects ? projects[id] : null
        console.log("project",project)
        console.log("projects", project)
        console.log("project id", projects[id])
        return {
          project: project,
          auth: state.firebase.auth,
          id: ownProps.match.params.id,
          doc: ownProps.match.params.id
        }
      }
   
      
      export default compose(
        withRouter,
        connect(mapStateToProps),
        firestoreConnect([{
          collection: 'projects'
        }])
      )(PostDetails); 