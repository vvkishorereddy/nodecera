import React, { Component } from "react";
import withContext from "../../hoc/ContextConsumer";

class Profile extends Component {
  componentWillMount() {
    console.log("Profile componentWillMount");
  }

  componentDidMount() {
    console.log("Profile componentDidMount");
  }

  componentWillUnmount() {
    console.log("Profile componentwillUnMount");
  }

  render() {
    console.log("Profile render");
    return <div>Profile</div>;
  }
}

export default withContext(Profile);
