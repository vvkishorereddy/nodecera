import React, { Component } from "react";
import JobSeeker from "./JobSeeker";
import Employer from "./Employer";

export default class RegisterForm extends Component {
  render() {
    return (
      <div className="tr-account section-padding">
        <div className="container text-center">
          <div className="user-account">
            <ul
              className="nav nav-tabs  nav-justified"
              role="tablist"
              style={{ display: "none" }}
            >
              <li
                onClick={e => openTab(e, "register")}
                data-id="seeker"
                className="tabTitle"
              >
                <a className="active">Job Seeker</a>
              </li>
              <li
                onClick={e => openTab(e, "register")}
                data-id="employers"
                className="tabTitle"
              >
                <a className="active">Employers</a>
              </li>
            </ul>
            <div className="tab-content">
              <div role="tabpanel" className="tab-pane " id="seeker">
                <JobSeeker />
              </div>
              <div role="tabpanel" className="tab-pane active" id="employers">
                <Employer />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
