import React, { Component, Fragment } from "react";
import TopBanner from "./TopBanner";
import JobData from "./JobData";
import AppBanner from "../AppBanner";

export default class JobDetails extends Component {
  render() {
    return (
      <Fragment>
        <TopBanner />
        <JobData />
        <AppBanner />
      </Fragment>
    );
  }
}
