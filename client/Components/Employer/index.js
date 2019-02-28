import React, { Component, Fragment } from "react";
import AppBanner from "../AppBanner";
import TopBanner from "./TopBanner";
import Profile from "./Profile";
import withContext from "../../hoc/ContextConsumer";

class Employer extends Component {
  render() {
    return (
      <Fragment>
        <TopBanner />
        <Profile />
        {/*<AppBanner />*/}
      </Fragment>
    );
  }
}
export default withContext(Employer);
