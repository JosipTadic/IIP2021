import { Component, useState } from "react"; 
import Post from './Post'
import {connect} from 'react-redux'
import {createPost} from '../store/actions/postActions.js'
import {Redirect} from 'react-router-dom'
import {withRouter} from 'react-router-dom' 


class CreateNewPost extends Component {
  state = {
    title: '',
    content: '',
    description: '',
    image: ''
  } 

  handleChangeImage(e) {
    console.log(this.state);
    this.setState({ image: null });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    }) 
  }

  
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state); 
    this.props.createPost(this.state);
    this.props.history.push('/blog');
  }
 
  render() {
    const { auth} = this.props;
    if (!auth.uid) return <Redirect to='/signin' />
    return (
      <div className="container">
        <Post />
        <form className="create" onSubmit={this.handleSubmit}>
        <h2>Create a New Project</h2> 
          <div className="input-field">
            <label htmlFor="title">Project Title</label>
            <input type="text" id='title' onChange={this.handleChange} />
            
          </div>
          <div className="input-field">
            <label htmlFor="content">Project Content</label>
            <textarea id="content"  onChange={this.handleChange}></textarea>
            
          </div> 
          <div className="input-field">
            <label htmlFor="description">Project Description </label>
            <textarea id="description"  onChange={this.handleChange}></textarea>
            
          </div> 
          <div className="input-field">
            <label htmlFor="image">Project Image</label>
            <p> *For upload of image, use URL </p>
            <input type="text" id="image" onChange={this.handleChange}/>
            
          </div> 
          <div>
            <button>Create</button>
          </div>
        </form> 
         

      </div>
    )
  }
}


const mapStateToProps = (state) => {
  console.log(state)
  return {
    auth: state.firebase.auth

  }

}

const mapDispatchToProps = dispatch => {
  return {
    createPost: (project) => dispatch(createPost(project))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateNewPost));
 