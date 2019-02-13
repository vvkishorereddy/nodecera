import React, { Component, Fragment } from "react";
import TopBanner from "./TopBanner";
import RegisterForm from "./RegisterForm";

export default class Register extends Component {
  render() {
    return (
      <Fragment>
        <TopBanner />
        <RegisterForm />
      </Fragment>
    );
  }
}
