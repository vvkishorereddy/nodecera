import React, { Component, Fragment } from "react";
import TopBanner from "./TopBanner";
import Terms from "./Terms";

export default class Contact extends Component {
  render() {
    return (
      <Fragment>
        <TopBanner />
        <Terms />
      </Fragment>
    );
  }
}
