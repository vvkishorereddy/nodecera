import React, { Component, Fragment } from "react";
import LoginForm from "./LoginForm";
import TopBanner from "./TopBanner";

export default class Login extends Component {
  render() {
    return (
      <Fragment>
        <TopBanner />
        <LoginForm />
      </Fragment>
    );
  }
}
