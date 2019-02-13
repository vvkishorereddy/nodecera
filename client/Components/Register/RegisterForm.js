import React, { Component } from "react";

export default class RegisterForm extends Component {
  render() {
    return (
      <div className="tr-account section-padding">
        <div className="container text-center">
          <div className="user-account">
            {/* Nav tabs */}
            <ul className="nav nav-tabs  nav-justified" role="tablist">
              <li role="presentation">
                <a
                  className="active"
                  href="signup.html#seeker"
                  aria-controls="seeker"
                  role="tab"
                  data-toggle="tab"
                >
                  Job Seeker
                </a>
              </li>
              <li role="presentation">
                <a
                  href="signup.html#employers"
                  aria-controls="employers"
                  role="tab"
                  data-toggle="tab"
                >
                  Employers
                </a>
              </li>
            </ul>
            {/* Tab panes */}
            <div className="tab-content">
              <div role="tabpanel" className="tab-pane active" id="seeker">
                <div className="account-content">
                  <form action="signup.html#" className="tr-form">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Full Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="your Email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm Password"
                      />
                    </div>
                    <div className="dropdown tr-change-dropdown">
                      <a data-toggle="dropdown" aria-expanded="false">
                        <span className="change-text">Gender</span>
                        <i className="fa fa-angle-down" />
                      </a>
                      <ul className="dropdown-menu tr-change">
                        <li>
                          <a href="signup.html#">Male</a>
                        </li>
                        <li>
                          <a href="signup.html#">Female</a>
                        </li>
                      </ul>
                    </div>
                    {/* /.category-change */}
                    <button type="submit" className="btn btn-primary">
                      Sign Up
                    </button>
                  </form>
                  <div className="new-user text-center">
                    <span>
                      Already Registered? <a href="signin.html">Sign in</a>{" "}
                    </span>
                  </div>
                </div>
              </div>
              <div role="tabpanel" className="tab-pane" id="employers">
                <div className="account-content">
                  <form action="signup.html#" className="tr-form">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Full Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="your Email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm Password"
                      />
                    </div>
                    <div className="dropdown tr-change-dropdown">
                      <a
                        data-toggle="dropdown"
                        href="signup.html#"
                        aria-expanded="false"
                      >
                        <span className="change-text">Industry Type</span>
                        <i className="fa fa-angle-down" />
                      </a>
                      <ul className="dropdown-menu tr-change">
                        <li>
                          <a href="signup.html#">Industry 1</a>
                        </li>
                        <li>
                          <a href="signup.html#">Industry 2</a>
                        </li>
                        <li>
                          <a href="signup.html#">Industry 3</a>
                        </li>
                      </ul>
                    </div>
                    {/* /.category-change */}
                    <button type="submit" className="btn btn-primary">
                      Sign Up
                    </button>
                  </form>
                  <div className="new-user text-center">
                    <span>
                      Already Registered? <a href="signin.html">Sign in</a>{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* container */}
      </div>
    );
  }
}
