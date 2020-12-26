import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'
import App from './data'
import Nav from './components/Nav'
const routing = ( 
    
        <Router>
          <div>
            <ul>
              <li>
                <NavLink exact activeClassName="active" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/nav">
                  Hello World
                </NavLink>
              </li> 
            </ul>
            <hr />
            <Switch>
              <Route exact path="/" component={App} />
              <Route path="/nav" component={Nav} /> 
            </Switch>
          </div>
        </Router>
      )


ReactDOM.render(routing, document.getElementById('root'))