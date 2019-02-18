import React, { Component, Fragment } from "react";
import LoginForm from "./LoginForm";
import TopBanner from "./TopBanner";
import withContext from "../../hoc/ContextConsumer";

class Login extends Component {
  componentWillMount() {
    console.log(this.props, "props");
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
