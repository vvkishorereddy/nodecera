import React, { Component, Fragment } from "react";
import LoginForm from "./LoginForm";
import TopBanner from "./TopBanner";
import withContext from "../../hoc/ContextConsumer";
import Auth from "../../hoc/Auth";

class Login extends Component {
  componentWillMount() {
    this.props.context.methodsList.isLoggedIn() &&
      this.props.history.replace("/dashboard");
  }
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
