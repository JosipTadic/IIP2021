import React from 'react'
import ReactDOM from 'react-dom' 
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'
import Navigation from './Navigation' 
import Data from './components/data'
import Home from './components/Home'

const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <NavLink exact activeClassName="active" to="/">
            nav
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/home">
            Home
          </NavLink>
        </li> 
        <li>
          <NavLink activeClassName="active" to="/data">
            Data
          </NavLink>
        </li> 
      </ul>
      <hr />
      <Switch>
        <Route exact path="/" component={Navigation} /> 
        <Route path="/home" component={Home} />
        <Route path="/data" component={Data} />

      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))