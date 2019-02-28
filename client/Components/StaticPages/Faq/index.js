import React, { Component, Fragment } from "react";
import TopBanner from "./TopBanner";
import Faq from "./Faq";

export default class Contact extends Component {
  render() {
    return (
      <Fragment>
        <TopBanner />
        <Faq />
      </Fragment>
    );
  }
}
