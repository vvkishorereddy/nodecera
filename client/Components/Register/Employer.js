import React, { Component } from "react";
import { Link } from "react-router-dom";
import withContext from "../../hoc/ContextConsumer";

class Employer extends Component {
  handleRegisterForm = () => {
    const data = {
      fullname: this.fullName.value,
      username: this.userName.value,
      email: this.email.value,
      password: this.password.value,
      confirm_password: this.confirm_password.value,
      user_type: "employer"
    };
    this.props.context.handleRegisterForm(data);
  };

  render() {
    return (
      <div className="account-content">
        <form className="tr-form">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Your Full Name"
              ref={ele => (this.fullName = ele)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              ref={ele => (this.userName = ele)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="your Email"
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
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password"
              ref={ele => (this.confirm_password = ele)}
            />
          </div>

          <button
            onClick={this.handleRegisterForm}
            type="button"
            className="btn btn-primary"
          >
            Sign Up
          </button>
        </form>
        <div className="new-user text-center">
          <span>
            Already Registered? <Link to="/login">Sign in</Link>
          </span>
        </div>
      </div>
    );
  }
}

export default withContext(Employer);
