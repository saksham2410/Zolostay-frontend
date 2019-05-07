import React, { Component } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import axios from "./config/axios";
import "../src/css/navbar.css";

import HotelList from "./components/hotels/HotelList";
import HotelShow from "./components/hotels/HotelShow";

import Login from "./components/users/Login";
import Register from "./components/users/Register";
import Account from "./components/users/Account";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false
    };
  }

  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.setState(() => ({
        isAuthenticated: true
      }));
    }
  }

  handleAuthentication = boolean => {
    this.setState(() => ({
      isAuthenticated: boolean
    }));
  };

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <nav class="navbar navbar-inverse">
            <div class="container-fluid">
              <div class="navbar-header">
                <a class="navbar-brand" href="#">
                  ZoloStay Booking
                </a>
              </div>
              <ul class="nav navbar-nav">
                <li class="active">
                <Link to="/" className = "nav-item nav-link">Home</Link>
                </li>
              </ul>
              <ul class="nav navbar-nav navbar-right">
            { this.state.isAuthenticated ? (
                  <React.Fragment>
                     <li><Link to="/users/account" className="nav-item nav-link">Account</Link></li>
                    <li><button class="btn btn-danger navbar-btn"><Link to="/users/logout" className="nav-item nav-link">Sign out</Link></button> </li>

                  </React.Fragment>
                ) : (
                  <React.Fragment>
                   <li><Link to="/users/signin" className = "nav-item nav-link"> Sign in </Link></li>
                  <li><Link to="/users/signup" className = "nav-item nav-link"> Sign up </Link></li>
                  </React.Fragment>
              )}
            </ul>

              
            </div>
          </nav>
          <div className="row mt-3" />
          <Route path="/" component={HotelList} exact={true} />
          <Route path="/hotels/:id" component={HotelShow} />
          <Route
            path="/users/signin"
            render={props => {
              return (
                <Login
                  {...props}
                  handleAuthentication={this.handleAuthentication}
                />
              );
            }}
          />
          <Route
            path="/users/logout"
            render={props => {
              axios
                .delete("/users/logout", {
                  headers: {
                    "x-auth": localStorage.getItem("token")
                  }
                })
                .then(response => {
                  props.history.push("/users/signin");
                  this.setState(() => ({
                    isAuthenticated: false
                  }));
                  localStorage.removeItem("token");
                });
            }}
          />
          <Route path="/users/account" component={Account} />
          <Route path="/users/signup" component={Register} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
