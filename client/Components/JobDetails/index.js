import React, { Component, Fragment } from "react";
import TopBanner from "./TopBanner";
import JobData from "./JobData";
import AppBanner from "../AppBanner";
import withContext from "../../hoc/ContextConsumer";
import Loader from "../Loader";

class JobDetails extends Component {
  componentDidMount() {
    this.props.context.getSingleJob(this.props.match.params.id);
  }
  render() {
    const { isLoading } = this.props.context;
    return isLoading ? (
      <Loader />
    ) : (
      <Fragment>
        <TopBanner />
        <JobData />
        <AppBanner />
      </Fragment>
    );
  }
}

export default withContext(JobDetails);
