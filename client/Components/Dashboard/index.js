import React, { Component, Fragment } from "react";
import Profile from "./Profile";
import withContext from "../../hoc/ContextConsumer";
import Loader from "../Loader";

class Dashboard extends Component {
  componentDidMount() {
    this.props.context.getUserProfile();
  }

  render() {
    const { isLoading } = this.props.context;
    return isLoading ? (
      <Loader />
    ) : (
      <Fragment>
        <Profile />
      </Fragment>
    );
  }
}

export default withContext(Dashboard);
