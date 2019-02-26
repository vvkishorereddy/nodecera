import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Index from "./Router";
import withContext from "./hoc/ContextConsumer";

class App extends Component {
  componentDidMount() {
    const loginValue = this.props.context.isLoggedIn();
    if (
      (this.props.location.pathname === "/login" ||
        this.props.location.pathname === "/register") &&
      loginValue
    ) {
      this.props.history.replace("/");
    }
    //!this.props.context.isLoggedIn() && this.props.history.replace("/login");
  }
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

export default withContext(withRouter(App));
