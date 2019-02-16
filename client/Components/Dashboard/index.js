import React, { Component, Fragment } from "react";
import Profile from "./Profile";
import Axios from "axios";

export default class Dashboard extends Component {
  componentDidMount() {
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

  render() {
    return (
      <Fragment>
        <Profile />
      </Fragment>
    );
  }
}
