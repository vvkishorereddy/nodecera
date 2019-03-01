import React, { Component, Fragment } from "react";
import TopBanner from "../TopBanner";
import Policy from "./Policy";

export default class Contact extends Component {
  render() {
    return (
      <Fragment>
        <TopBanner title="Privacy Policy" />
        <Policy />
      </Fragment>
    );
  }
}
