import React, { Component, Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import withContext from "../Context/ConsumerHOC";

class Header extends Component {
  handleLogOut = () => {
    this.props.context.methodsList.userLogOut();
  };

  render() {
    const { isLoggedIn, loggedUser } = this.props.context;

    let rightNavContent = "",
      leftNavContent = "";
    if (isLoggedIn) {
      rightNavContent = (
        <Fragment>
          <li>
            <Link to="/dashboard">Dashboard </Link>
          </li>
          <li>
            <Link to="/logout" onClick={this.handleLogOut}>
              Log Out
            </Link>
          </li>
        </Fragment>
      );
    } else {
      rightNavContent = (
        <Fragment>
          <li>
            <i className="fa fa-user" />
          </li>
          <li>
            <Link to="/login">Sign In </Link>
          </li>
          <li>
            <Link to="/register">Register </Link>
          </li>
        </Fragment>
      );
    }

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
                  <Link to="/jobs">Job List</Link>
                </li>
                {leftNavContent}
              </ul>
            </div>
            <div className="navbar-right">
              <ul className="sign-in tr-list">{rightNavContent}</ul>
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

export default withContext(Header);
