import React, { Component, Fragment } from "react";
import JobsList from "./JobsList";
import TopBanner from "./TopBanner";
import AppBanner from "../AppBanner";
import withContext from "../../hoc/ContextConsumer";
import Loader from "../Loader";

class Jobs extends Component {
  componentDidMount() {
    this.props.context.fetchJobs();
  }
  render() {
    return this.props.context.isLoading ? (
      <Loader />
    ) : (
      <Fragment>
        <TopBanner />
        <JobsList />
        <AppBanner />
      </Fragment>
    );
  }
}
export default withContext(Jobs);
