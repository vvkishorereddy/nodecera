import React, { Component, Fragment } from "react";
import JobsList from "./JobsList";
import TopBanner from "./TopBanner";
import AppBanner from "../AppBanner";
import withContext from "../../hoc/ContextConsumer";

class Jobs extends Component {
  componentDidMount() {
    this.props.context.fetchTotalJobs();
  }
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
export default withContext(Jobs);
