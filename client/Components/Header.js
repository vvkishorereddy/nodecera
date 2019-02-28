import React, { Component, Fragment } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import withContext from "../hoc/ContextConsumer";

class Header extends Component {
  render() {
    const { isLogged } = this.props.context;

    let rightNavContent = "",
      leftNavContent = "";
    leftNavContent = isLogged && (
      <Fragment>
        <li>
          <NavLink to="/employer-profile">employer profile</NavLink>
        </li>
      </Fragment>
    );
    rightNavContent = isLogged ? (
      <Fragment>
        <li>
          <NavLink to="/dashboard">Dashboard </NavLink>
        </li>
        <li>
          <NavLink to="/logout" onClick={this.props.context.userLogOut}>
            Log Out
          </NavLink>
        </li>
      </Fragment>
    ) : (
      <Fragment>
        <li>
          <i className="fa fa-user" />
        </li>
        <li>
          <NavLink to="/login">Sign In </NavLink>
        </li>
        <li>
          <NavLink to="/register">Register </NavLink>
        </li>
      </Fragment>
    );

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
              <NavLink className="navbar-brand" to="/">
                <img className="img-fluid" src="images/logo.png" alt="Logo" />
              </NavLink>
            </div>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="nav navbar-nav">
                <li className="tr-dropdown ">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/jobs">Job List</NavLink>
                </li>

                {leftNavContent}
              </ul>
            </div>
            <div className="navbar-right">
              <ul className="sign-in tr-list">{rightNavContent}</ul>
              <NavLink to="/post-job" className="btn btn-primary">
                Post Job
              </NavLink>
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

export default withContext(withRouter(Header));
