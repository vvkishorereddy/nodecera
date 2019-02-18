import React, { Component, Fragment } from "react";
import AppBanner from "../AppBanner";
import Testimonials from "./Testimonials";
import HomeJobs from "./HomeJobs";
import TopBanner from "./TopBanner";
import AddResume from "../AddResume";

export default class Home extends Component {
  componentWillMount() {
    console.log("Home componentWillMount");
  }

  componentDidMount() {
    console.log("Home componentDidMount");
  }

  componentWillUnmount() {
    console.log("Home componentwillUnMount");
  }

  render() {
    console.log("Home render");
    return (
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
