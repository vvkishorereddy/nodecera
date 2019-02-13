import React, { Component } from "react";

export default class LoginForm extends Component {
  render() {
    return (
      <div className="tr-account section-padding">
        <div className="container text-center">
          <div className="user-account">
            <div className="account-content">
              <form action="signin.html#" className="tr-form">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Please Enter Your Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                <div className="user-option">
                  <div className="checkbox">
                    <label htmlFor="logged">
                      <input type="checkbox" name="logged" id="logged" />
                      Remember me
                    </label>
                  </div>
                  <div className="forgot-password">
                    <a href="signin.html#">I forgot password</a>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </form>
              <div className="new-user text-center">
                <span>
                  <a href="signup.html">Create a New Account</a>{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* container */}
      </div>
    );
  }
}
