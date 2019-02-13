import React, { Component, Fragment } from "react";
import Details from "./Details";
import TopBanner from "./TopBanner";
import AppBanner from "../AppBanner";

export default class ResumeDetails extends Component {
  render() {
    return (
      <Fragment>
        <TopBanner />
        <Details />
        <AppBanner />
      </Fragment>
    );
  }
}
