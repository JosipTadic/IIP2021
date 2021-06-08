import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {signUp} from '../store/actions/authActions'
class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state);
    }

    render() {
        const {  auth} = this.props;
        if (auth.uid) return <Redirect to='/' />
        return (
            

        <div className="right">
        <div className="content">
            <h2>Sign Up</h2>
            <form id="form-login" method="post" onSubmit={this.handleSubmit}>
                <div className="form-element form-stack">
                    <label for="username-login" className="form-label">Email</label>
                    <input type="email" id="email" onChange={this.handleChange}/>
                </div>
                <div className="form-element form-stack">
                    <label for="password-login" className="form-label">Password</label>
                    <input type="password" id="password" onChange={this.handleChange}/>
                </div>
                <div className="form-element form-stack">
                    <label for="firstName-login" className="form-label">First Name</label>
                    <input type="text" id="firstName" onChange={this.handleChange} />
                </div>
                <div className="form-element form-stack">
                    <label for="lastName-login" className="form-label">Last Name</label>
                    <input type="text" id="lastName" onChange={this.handleChange} />
                </div>
                <div className="form-element form-submit">
                    <button id="logIn" className="login" type="submit" name="login">Sign up</button> 
                </div>
            </form>
        </div> 
        </div> 
        )
    }
}

const mapStateToProps = (state) => {
    return{ 
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}
const mapDispatchToProps = (dispatch)=> {
    return {
      signUp: (creds) => dispatch(signUp(creds))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)( SignUp);