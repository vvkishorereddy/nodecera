import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class TopBanner extends Component {
  render() {
    return (
      <div className="tr-users section-before bg-image">
        <div className="container text-center">
          <div className="row">
            <div className="col-sm-6">
              <div className="job-find">
                <div className="icon">
                  <img
                    src="images/others/man.png"
                    alt="Icon"
                    className="img-fluid"
                  />
                </div>
                <h1>Find a Job</h1>
                <span>5,798,298 Skilld People </span>
                <Link to="/jobs" className="btn btn-primary">
                  Search Jobs
                </Link>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="for-employers">
                <div className="icon">
                  <img
                    src="images/others/briefcase.png"
                    alt="Icon"
                    className="img-fluid"
                  />
                </div>
                <h1>For Employers</h1>
                <span>5,798,298 Skilld People</span>
                <Link to="/post-job" className="btn btn-primary">
                  Post a Job
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}
      </div>
    );
  }
}
