import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Index from "./Router";
import withContext from "./hoc/ContextConsumer";

class App extends Component {
  componentDidMount() {
    const loginValue = this.props.context.isLoggedIn();
    if (loginValue) {
      if (
        this.props.location.pathname === "/login" ||
        this.props.location.pathname === "/register"
      ) {
        this.props.history.replace("/");
      } else {
        this.props.history.replace(this.props.location.pathname);
      }
    }
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
