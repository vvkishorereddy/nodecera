import React, { Component, Fragment } from "react";
import TopBanner from "./TopBanner";
import AboutUs from "./AboutUs";

export default class Contact extends Component {
  render() {
    return (
      <Fragment>
        <TopBanner />
        <AboutUs />
      </Fragment>
    );
  }
}
