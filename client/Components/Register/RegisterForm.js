import React, { Component } from "react";
import JobSeeker from "./JobSeeker";
import Employer from "./Employer";

export default class RegisterForm extends Component {
  openTab = e => {
    let liTag = document.querySelectorAll(".tabTitle");
    let dataDivTag = document.querySelectorAll(".tab-pane");
    liTag.forEach(element => {
      element.querySelector("a").classList.remove("active");
    });
    dataDivTag.forEach(element => {
      element.classList.remove("active");
    });
    document
      .querySelector(`[data-id=${e.currentTarget.dataset.id}] a`)
      .classList.add("active");
    document
      .querySelector(`#${e.currentTarget.dataset.id}`)
      .classList.add("active");
  };

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
              <li onClick={this.openTab} data-id="seeker" className="tabTitle">
                <a className="active">Job Seeker</a>
              </li>
              <li
                onClick={this.openTab}
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
