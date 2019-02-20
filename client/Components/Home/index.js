import React, { Component, Fragment } from "react";
import AppBanner from "../AppBanner";
import Testimonials from "./Testimonials";
import HomeJobs from "./HomeJobs";
import TopBanner from "./TopBanner";
import AddResume from "../AddResume";
import withContext from "../../hoc/ContextConsumer";
import Loader from "../Loader";

class Home extends Component {
  componentDidMount() {
    this.props.context.fetchJobs();
  }

  render() {
    const { isLoading } = this.props.context;
    return isLoading ? (
      <Loader />
    ) : (
      <Fragment>
        <TopBanner />
        <HomeJobs />
        <AddResume />
        {/*<Testimonials />*/}
        <AppBanner />
      </Fragment>
    );
  }
}

export default withContext(Home);
