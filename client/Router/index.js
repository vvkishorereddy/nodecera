import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Components/Home";
import Jobs from "../Components/Jobs";
import Register from "../Components/Register";
import Login from "../Components/Login";
import Contact from "../Components/Contact";
import PageNotFound from "../Components/ErrorPages/404";

export default class Index extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/jobs" exact component={Jobs} />
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <Route path="/contact" exact component={Contact} />
        <Route component={PageNotFound} />
      </Switch>
    );
  }
}
