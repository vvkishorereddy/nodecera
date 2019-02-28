import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import Home from "../Components/Home";
import Jobs from "../Components/Jobs";
import Register from "../Components/Register";
import Login from "../Components/Login";
import PostJob from "../Components/PostJob";
import JobDetails from "../Components/JobDetails";
import ResumeDetails from "../Components/ResumeDetails";
import CompanyDetails from "../Components/CompanyDetails";
import Employee from "../Components/Employee";
import Employer from "../Components/Employer";
import Dashboard from "../Components/Dashboard";
import Contact from "../Components/StaticPages/Contact";
import AboutUs from "../Components/StaticPages/AboutUs";
import Faq from "../Components/StaticPages/Faq";
import PrivacyPolicy from "../Components/StaticPages/PrivacyPolicy";
import TermsConditions from "../Components/StaticPages/TermsConditions";
import PageNotFound from "../Components/ErrorPages/404";

class Index extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <PrivateRoutes path="/dashboard" exact component={Dashboard} />
        <PrivateRoutes path="/post-job" exact component={PostJob} />
        <Route path="/jobs" exact component={Jobs} />
        <Route path="/jobs/:id" exact component={JobDetails} />
        <Route path="/resume/:id" exact component={ResumeDetails} />
        <Route path="/company/:id" exact component={CompanyDetails} />
        <Route path="/employee-profile" exact component={Employee} />
        <PrivateRoutes path="/employer-profile" exact component={Employer} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/about-us" exact component={AboutUs} />
        <Route path="/terms-conditions" exact component={TermsConditions} />
        <Route path="/privacy-policy" exact component={PrivacyPolicy} />
        <Route path="/faq" exact component={Faq} />
        <Route component={PageNotFound} />
      </Switch>
    );
  }
}

export default Index;
