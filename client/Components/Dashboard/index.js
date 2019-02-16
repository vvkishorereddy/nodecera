import React, { Component, Fragment } from "react";
import Profile from "./Profile";
import Axios from "axios";

export default class Dashboard extends Component {
  componentDidMount() {
    Axios.get("/api/user/profile", {
      params: {
        secret_token: localStorage.getItem("access_token")
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
