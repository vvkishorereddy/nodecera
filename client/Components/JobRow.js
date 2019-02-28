import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class JobRow extends Component {
  render() {
    const { job } = this.props;

    return (
      <div className="col-md-6 col-lg-3">
        <div className="job-item">
          <div className="item-overlay">
            <div className="job-info">
              <Link to={`/jobs/${job._id}`} className="btn btn-primary">
                {job.workType}
              </Link>
              <span className="tr-title">
                <Link to={`/jobs/${job._id}`}>{job.title}</Link>
                <span>
                  <Link to={`/jobs/${job._id}`}>{job.company_name}</Link>
                </span>
              </span>
              <ul className="tr-list job-meta">
                <li>
                  <i className="fa fa-map-signs" aria-hidden="true" />
                  {job.location}
                </li>
                <li className="text-capitalize">
                  <i className="fa fa-briefcase" aria-hidden="true" />
                  {job.experience}
                </li>
                <li>
                  <i className="fa fa-money" aria-hidden="true" />
                  {job.salary}
                </li>
              </ul>
              <ul className="job-social tr-list">
                <li>
                  <Link to={`/jobs/${job._id}`}>
                    <i className="fa fa-heart-o" aria-hidden="true" />
                  </Link>
                </li>
                <li>
                  <Link to={`/jobs/${job._id}`}>
                    <i className="fa fa-expand" aria-hidden="true" />
                  </Link>
                </li>
                <li>
                  <Link to={`/jobs/${job._id}`}>
                    <i className="fa fa-bookmark-o" aria-hidden="true" />
                  </Link>
                </li>
                <li>
                  <Link to={`/jobs/${job._id}`}>
                    <i className="fa fa-long-arrow-right" aria-hidden="true" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="job-info">
            <div className="company-logo" style={{ textAlign: "center" }}>
              <img
                src={job.company_logo}
                alt="images"
                className="img-fluid"
                style={{ width: "100px" }}
              />
            </div>
            <span className="tr-title">
              <Link to={`/jobs/${job._id}`}>{job.title}</Link>
              <span>
                <Link to={`/jobs/${job._id}`}>{job.company_name}</Link>
              </span>
            </span>
            <ul className="tr-list job-meta">
              <li>
                <span>
                  <i className="fa fa-map-signs" aria-hidden="true" />
                </span>
                {job.location}
              </li>
              <li className="text-capitalize">
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
            <div className="time">
              <Link to={`/jobs/${job._id}`}>
                <span className={job.workTypeClass}>{job.workType}</span>
              </Link>
              <span className="pull-right">{job.created_at}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
