import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class JobRowOtherType extends Component {
  render() {
    const { job } = this.props;
    return (
      <div className="col-sm-6">
        <div className="job-item">
          <div className="job-info">
            <div className="clearfix">
              <div className="company-logo">
                <img
                  src={job.company_logo}
                  alt="images"
                  className="img-fluid"
                />
              </div>
              <span className="tr-title">
                <Link to={`/jobs/${job._id}`}>{job.title}</Link>
                <span>
                  <Link to={`/jobs/${job._id}`}>{job.company_name}</Link>
                </span>
              </span>
              <span>
                <Link to={`/jobs/${job._id}`} className="btn btn-primary">
                  {job.workType}
                </Link>
              </span>
            </div>
            <ul className="tr-list job-meta">
              <li>
                <span>
                  <i className="fa fa-map-signs" aria-hidden="true" />
                </span>
                {job.location}
              </li>
              <li>
                <span>
                  <i className="fa fa-briefcase" aria-hidden="true" />
                </span>
                {job.experience}
              </li>
              <li>
                <span>
                  <i className="fa fa-money" aria-hidden="true" />
                </span>
                {job.salary}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
