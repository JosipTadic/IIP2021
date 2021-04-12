import { Component, useState } from "react";
import { useHistory } from "react-router-dom";
import Post from './Post'
import {connect} from 'react-redux'
import {createPost} from '../store/actions/postActions.js'
import {Redirect} from 'react-router-dom'
import {withRouter} from 'react-router-dom'


class CreateNewPost extends Component {
  state = {
    title: '',
    content: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createPost(this.state);
    this.props.history.push('/blog');
  }
  render() {
    const { auth} = this.props;
    if (!auth.uid) return <Redirect to='/signin' />
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create a New Project</h5>
          <div className="input-field">
            <input type="text" id='title' onChange={this.handleChange} />
            <label htmlFor="title">Project Title</label>
          </div>
          <div className="input-field">
            <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="content">Project Content</label>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Create</button>
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


/*const CreateNewPost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('author1');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    fetch('http://localhost:8000/blogs/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      // history.go(-1);
      history.push('/blog');
    })
  }

  return (
    <div> 
    <Post />
      <div className="create">
        <h2>Add a New Blog</h2>
        <form onSubmit={handleSubmit}>
          <label>Blog title:</label>
          <input 
            type="text" 
            required 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Blog body:</label>
          <textarea
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <label>Blog author:</label>
          <select
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          >
            <option value="author1">author1</option>
            <option value="author2">author2</option>
          </select>
          <button>Add Blog</button>
        </form>
      </div>
    </div>
  );
}
 
export default CreateNewPost; */

 