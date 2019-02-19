import React, { Component, Fragment } from "react";
import Profile from "./Profile";
import withContext from "../../hoc/ContextConsumer";

class Dashboard extends Component {
  componentDidMount() {
    this.props.context.getUserProfile();
  }

  render() {
    return (
      <Fragment>
        <Profile />
      </Fragment>
    );
  }
}

export default withContext(Dashboard);
