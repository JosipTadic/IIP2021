import React, {Component} from 'react'
import {connect} from 'react-redux'
import {signIn} from '../store/actions/authActions'
import {Redirect} from 'react-router-dom' 

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
    }

    render() {
        const {authError, auth} = this.props;
        if (auth.uid) return <Redirect to='/blog' />
        return (        
            <div className="right">
                <div className="content">
                    <h2>Login</h2>
                    <form id="form-login" method="post" onSubmit={this.handleSubmit}>
                        <div className="form-element form-stack">
                            <label for="username-login" className="form-label">Email</label>
                            <input type="email" id="email" onChange={this.handleChange}/>
                        </div>
                        <div className="form-element form-stack">
                            <label for="password-login" className="form-label">Password</label>
                            <input type="password" id="password" onChange={this.handleChange}/>
                        </div>
                        <div className="form-element form-submit">
                            <button id="logIn" className="login" type="submit" name="login">Log In</button> 
                            <div> {authError ? <p>{authError}</p> : null }</div>
                        </div>
                    </form>
                </div> 
                </div> 
        )
    }
}
const mapStateToProps = (state) => {
    return{
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);