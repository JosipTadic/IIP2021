import React from 'react' 
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import {withRouter} from 'react-router-dom'   
import { Component } from 'react'
import StarRatingComponent from 'react-star-rating-component';
import {updatePost} from '../store/actions/postActions.js' 

class CommentDetails extends Component{
   
     
     
        state = {
          
          name: ''
        };

        handleChange = (e) => {
            this.setState({
              [e.target.id]: e.target.value
            }) 
          }
         
        handleSubmit = (e) => {
            e.preventDefault();
            console.log(this.state); 
            this.props.updatePost(this.state);
            this.props.history.push('/blog');
          }
      
  render() {
    const { star} = this.props; 
    const { rating } = this.state; 
    ;  
    if(star) {
 
        return (
        <div  >     
             <form onSubmit={this.handleSubmit}>
              <h2>Rating from state: {rating}</h2>
               
               <div className="form-element form-stack">
                <label htmlFor="title">name</label>
                <input type="text" id='name' onChange={this.handleChange} />
                
            </div> 
               <button className="login">Save rating</button>
               </form>
            <div  >

                
                 <h1  > helllooo {star.rating}</h1>    <br/>
                 <p style={{color:'red'}}>{star.authorId}</p>
                   
     
             
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
  }
    const mapStateToProps = (state, ownProps) => {
        console.log(state);
        console.log("reading star")
        const id = ownProps.match.params.id;
        const star = state.firestore.data.star; 
        console.log("star", star)   
        console.log("id", id)
        console.log(star.name) 
        return {
          star: star
        }
      } 
      const mapDispatchToProps = dispatch => {
        return {
          updatePost: (stars) => dispatch(updatePost(stars))
        }
      }
      export default compose(
        withRouter,
        connect(mapStateToProps,mapDispatchToProps),
        firestoreConnect([{
          collection: 'star'
        }])
      )(CommentDetails); 

      /*<StarRatingComponent 
                name="rate1" 
                starCount={10}
                value={rating}
                id="rating"
                onStarClick={this.onStarClick.bind(this)}
                 const { rating } = this.state; 
              /> 
              
              
              
              onStarClick(nextValue, prevValue, name) {
        console.log("star")
        this.setState({rating: nextValue}); 
      }
      handleSubmit = (e) => {
        console.log("star-2")
        e.preventDefault();
        console.log(this.state); 
        this.props.updatePost(this.state);  */