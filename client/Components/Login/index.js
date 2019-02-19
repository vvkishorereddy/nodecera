import React, { Component, Fragment } from "react";
import LoginForm from "./LoginForm";
import TopBanner from "./TopBanner";
import withContext from "../../hoc/ContextConsumer";

class Login extends Component {
  render() {
    return (
      <Fragment>
        <TopBanner />
        <LoginForm />
      </Fragment>
    );
  }
}

export default withContext(Login);
