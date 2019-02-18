import React, { Component, Fragment } from "react";
import TopBanner from "./TopBanner";
import RegisterForm from "./RegisterForm";
import withContext from "../../hoc/ContextConsumer";

class Register extends Component {
  componentWillMount() {
    this.props.context.methodsList.isLoggedIn() &&
      this.props.history.replace("/dashboard");
  }
  render() {
    return (
      <Fragment>
        <TopBanner />
        <RegisterForm />
      </Fragment>
    );
  }
}

export default withContext(Register);
