import React, { Component, Fragment } from "react";
import Details from "../CompanyDetails/Details";
import TopBanner from "../CompanyDetails/TopBanner";
import AppBanner from "../AppBanner";

export default class CompanyDetails extends Component {
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
