import React, { Component, Fragment } from "react";
import JobsList from "./JobsList";
import TopBanner from "./TopBanner";
import AppBanner from "../AppBanner";

export default class Jobs extends Component {
  render() {
    return (
      <Fragment>
        <TopBanner />
        <JobsList />
        <AppBanner />
      </Fragment>
    );
  }
}
