import React, { Component, Fragment } from "react";
import PostJobForm from "./PostJobForm";
import TopBanner from "./TopBanner";

export default class PostJob extends Component {
  render() {
    return (
      <Fragment>
        <TopBanner />
        <PostJobForm />
      </Fragment>
    );
  }
}
