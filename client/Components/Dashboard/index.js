import React, { Component, Fragment } from "react";
import Profile from "./Profile";
import Axios from "axios";
import withContext from "../../hoc/ContextConsumer";
import Auth from "../../hoc/Auth";

class Dashboard extends Component {
  constructor() {
    super();
    console.log("Dashboard Index constructor");
  }
  componentDidMount() {
    console.log("Dashboard Index componentDidMount");
    const access_token = localStorage.getItem("access_token") || "";
    let headers;
    if (access_token) {
      let headers = `Authorization: bearer ${access_token}`;
    }

    Axios.get("/api/user/profile", {
      headers: {
        headers
      }
    }).then(data => console.log(data));
  }

  componentWillMount() {
    console.log("DashboardIndex componentWillMount");
  }

  componentWillUnmount() {
    console.log("Dashboard componentwillUnMount");
  }

  render() {
    console.log("Dashboard Index render");
    console.log(this.props);
    return (
      <Fragment>
        <Profile />
      </Fragment>
    );
  }
}

export default withContext(Auth(Dashboard));
