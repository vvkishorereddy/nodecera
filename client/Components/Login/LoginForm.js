import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class LoginForm extends Component {
  handleLoginForm = () => {
    axios
      .post("/api/login", {
        email: this.email.value,
        password: this.password.value
      })
      .then(response => {
        localStorage.setItem("access_token", response.data.data.access_token);
      });
  };

  render() {
    return (
      <div className="tr-account section-padding">
        <div className="container text-center">
          <div className="user-account">
            <div className="account-content">
              <form className="tr-form">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Please Enter Your Email"
                    ref={ele => (this.email = ele)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    ref={ele => (this.password = ele)}
                  />
                </div>
                <div className="user-option">
                  <div className="forgot-password">
                    <Link to="/forgot-password">I forgot password</Link>
                  </div>
                </div>
                <button
                  onClick={this.handleLoginForm}
                  type="button"
                  className="btn btn-primary"
                >
                  Login
                </button>
              </form>
              <div className="new-user text-center">
                <span>
                  <Link to="/register">Create a New Account</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
