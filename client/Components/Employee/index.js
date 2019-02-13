import React, { Component, Fragment } from "react";
import TopBanner from "./TopBanner";
import Profile from "./Profile";
import AppBanner from "../AppBanner";

export default class Employee extends Component {
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
