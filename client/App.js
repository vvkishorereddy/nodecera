import React, { Component, Fragment } from "react";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Index from "./Router";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Index />
        <Footer />
      </Fragment>
    );
  }
}
