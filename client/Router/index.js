import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Components/Home";
import Jobs from "../Components/Jobs";
import Register from "../Components/Register";
import Login from "../Components/Login";
import Contact from "../Components/Contact";
import PageNotFound from "../Components/ErrorPages/404";
import PostJob from "../Components/PostJob";
import JobDetails from "../Components/JobDetails";
import ResumeDetails from "../Components/ResumeDetails";
import CompanyDetails from "../Components/CompanyDetails";
import Employee from "../Components/Employee";
import Employer from "../Components/Employer";
import Dashboard from "../Components/Dashboard";

class Index extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/jobs" exact component={Jobs} />
        <Route path="/jobs/:id" exact component={JobDetails} />
        <Route path="/post-job" exact component={PostJob} />
        <Route path="/resume/:id" exact component={ResumeDetails} />
        <Route path="/company/:id" exact component={CompanyDetails} />
        <Route path="/employee-profile" exact component={Employee} />
        <Route path="/employer-profile" exact component={Employer} />
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route component={PageNotFound} />
      </Switch>
    );
  }
}

export default Index;
