import React, { Component } from "react";
import { Link } from "react-router-dom";

import withContext from "../../hoc/ContextConsumer";

class LoginForm extends Component {
  handleLoginForm = () => {
    this.props.context.LoginUser(this.email.value, this.password.value);
    this.email.value = "";
    this.password.value = "";
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

export default withContext(LoginForm);
