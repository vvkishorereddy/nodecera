import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <header className="tr-header">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <div className="navbar-header">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon">
                  <i className="fa fa-align-justify" />
                </span>
              </button>
              <Link className="navbar-brand" to="/">
                <img className="img-fluid" src="images/logo.png" alt="Logo" />
              </Link>
            </div>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="nav navbar-nav">
                <li className="tr-dropdown active">
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/jobs/7">Post A Job</Link>
                </li>
                <li>
                  <Link to="/jobs">Job List</Link>
                </li>
              </ul>
            </div>
            <div className="navbar-right">
              <ul className="sign-in tr-list">
                <li>
                  <i className="fa fa-user" />
                </li>
                <li>
                  <Link to="/login">Sign In</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </ul>
              <Link to="/post-job" className="btn btn-primary">
                Post Job
              </Link>
            </div>
            {/* /.nav-right */}
          </div>
          {/* /.container */}
        </nav>
        {/* /.navbar */}
      </header>
    );
  }
}
