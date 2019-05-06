import React, { Component } from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom'
import axios from './config/axios'
import '../src/css/navbar.css'

import HotelList from './components/hotels/HotelList'
import HotelShow from './components/hotels/HotelShow'
import HotelEnter from './components/hotels/HotelEnter'

import Login from './components/users/Login'
import Register from './components/users/Register'
import Account from './components/users/Account'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isAuthenticated : false
    }
  }

  componentDidMount() {
    if(localStorage.getItem('token')) {
      this.setState(() => ({ 
        isAuthenticated: true 
      }))
    }
  }

  handleAuthentication = (boolean) => {
    this.setState(() => ({
      isAuthenticated: boolean
    }))
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <div className="topnav fixed-top mb-4">
          <div className="row">
            <div className="col-md-3">
              <Link to="/" className = "nav-item nav-link">Home</Link>
            </div>
            <div className="col-md-6">
            <div className="row">
            <div className="col-md-12 offset-md-4 mt-2">
            <h3 style={{"color":"Black"}}>ZoloStay Booking WebApp</h3>
            </div>
            </div>
            </div>
            <div className="col-md-3">
            { this.state.isAuthenticated ? (
                  <React.Fragment>
                     <Link to="/users/account" className="nav-item nav-link">Account</Link>
                    <Link to="/users/logout" className="nav-item nav-link">Sign out</Link> 

                  </React.Fragment>
                ) : (
                  <React.Fragment>
                   <Link to="/users/signin" className = "nav-item nav-link"> Sign in </Link>
                  <Link to="/users/signup" className = "nav-item nav-link"> Sign up </Link>
                  </React.Fragment>
              )}
            </div>
          </div> 
          </div>
          <div className="row mt-3" >
          </div>
          <Route path="/" component={HotelList} exact={true}/>
          <Route path="/hotels/:id" component={HotelShow} />
          <Route path="/users/signin" render = {(props) => {
            return <Login {...props} handleAuthentication = {this.handleAuthentication} />
          }
          }/>
          <Route path="/users/logout" render={(props) => {
            axios.delete('/users/logout', {
              headers: {
                'x-auth': localStorage.getItem('token')
              }
            })
            .then(response => {
              props.history.push('/users/signin')
              this.setState(() => ({
                isAuthenticated: false
              }))
              localStorage.removeItem('token')
            })
          }} />
          <Route path="/users/account" component={Account} />
          <Route path="/users/signup" component={Register} />
          </div>
          

      </BrowserRouter>
    )
  }
}

export default App;
