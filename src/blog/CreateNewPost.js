import React,{ Component } from "react"; 
import Post from './Post'
import {connect} from 'react-redux'
import {createPost} from '../store/actions/postActions.js'
import {Redirect} from 'react-router-dom'
import {withRouter} from 'react-router-dom' 
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import PropTypes from "prop-types";

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

  handleChangeContent = (e) => {
    console.log(this.state);
    this.setState({ content: e });
  }

  handleChangeNaslovna= (e) => {
    console.log(this.state);
    this.setState({ image: e });
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
      <div className="content">
        <Post />
        <form  onSubmit={this.handleSubmit}>
        <h2>Create a New Project</h2> 
          <div className="form-element form-stack">
            <label htmlFor="title">Project Title</label>
            <input type="text" id='title' onChange={this.handleChange} />
            
          </div>
          <div className="form-element form-stack">
            <label htmlFor="description">Project Description </label>
            <textarea id="description"  onChange={this.handleChange}></textarea>
            
          </div> 
          
          <ReactQuill 
            theme="snow"  
            onChange={this.handleChangeContent}
            modules={CreateNewPost.modules}
            formats={CreateNewPost.formats}
            /> <br/>
           <ReactQuill
              type="snow"
              placeholder="Učitajte sliku za naslovnu, koristite CTRL+V kako biste samo kopirali sliku sa interneta, ili ju samo dovucite iz Vaše datoteke."
              modules={CreateNewPost.modulesNaslovna}
              formats={CreateNewPost.formatsNaslovna}
              onChange={this.handleChangeNaslovna}
            />
          <br/>
          <div>
            <button className="login">Create</button>
          </div>
        </form> 
         

      </div>
    )
  }
}



CreateNewPost.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" }
    ],
    ["link", "image", "video"],
    ["clean"]
  ],

  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false
  }
};

CreateNewPost.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video"
];
CreateNewPost.modulesNaslovna = {
  toolbar: [["image"]],
  clipboard: {
    matchVisual: false
  }
};

CreateNewPost.formatsNaslovna = ["image"];

CreateNewPost.propTypes = {
  classes: PropTypes.object.isRequired
};

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
 
/*   <CKEditor 
                    id="content"
                    editor={ ClassicEditor } 
                    onChange={ ( event, editor ) => {
                      const data = editor.getData();
                      this.setState({
                        content: data
                      })
                      console.log( { event, editor, data } );
                  } }
                 
                />
                <div className="form-element form-stack">
            <label htmlFor="image">Project Image</label>
            <p> *For upload of image, use URL </p>
            <input type="text" id="image" onChange={this.handleChange}/>
            
          </div> 
                
                
                */