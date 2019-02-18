import React, { Component, Fragment } from "react";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Index from "./Router";

class App extends Component {
  constructor() {
    super();
    console.log("App Constructor");
  }
  componentWillMount() {
    console.log("App componentWillMount");
  }
  componentDidMount() {
    console.log("App componentDidMount");
  }
  componentWillUnmount() {
    console.log("App  componentWillUnmount");
  }
  render() {
    console.log("App render");
    return (
      <Fragment>
        <Header />
        <Index />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
