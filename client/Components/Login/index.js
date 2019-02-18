import React, { Component, Fragment } from "react";
import LoginForm from "./LoginForm";
import TopBanner from "./TopBanner";
import withContext from "../../hoc/ContextConsumer";
import Auth from "../../hoc/Auth";

class Login extends Component {
  constructor() {
    super();
    console.log("Login construcctor");
  }
  componentWillMount() {
    console.log("Login componentWillMount");
  }

  componentDidMount() {
    console.log("Login componentDidMount");
  }

  componentWillUnmount() {
    console.log("Login componentwillUnMount");
  }

  render() {
    console.log("Login render", this.props);
    return (
      <Fragment>
        <TopBanner />
        <LoginForm />
      </Fragment>
    );
  }
}

export default withContext(Auth(Login));
