import React, { Component, Fragment } from "react";
import AppBanner from "../AppBanner";
import TopBanner from "./TopBanner";
import Profile from "./Profile";

export default class Employer extends Component {
  render() {
    return (
      <Fragment>
        <TopBanner />
        <Profile />
        <AppBanner />
      </Fragment>
    );
  }
}
