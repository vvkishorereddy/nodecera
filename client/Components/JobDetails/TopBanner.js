import React, { Component } from "react";

export default class TopBanner extends Component {
  render() {
    return (
      <div className="tr-breadcrumb bg-image section-before">
        <div className="container">
          <div className="breadcrumb-info text-center">
            <div className="breadcrumb-logo">
              <img
                src="images/others/company-logo.png"
                alt="Logo"
                className="img-fluid"
              />
            </div>
            <div className="page-title">
              <h1>Graphics Designer @ Google inc</h1>
            </div>
            <ul className="tr-list job-meta list-inline">
              <li>
                <i className="fa fa-map-signs" aria-hidden="true" />
                San Francisco, CA, US
              </li>
              <li>
                <i className="fa fa-map-marker" aria-hidden="true" />
                Full Time
              </li>
              <li>
                <i className="fa fa-money" aria-hidden="true" />
                $25,000 - $35,000
              </li>
              <li>
                <i className="fa fa-tags" aria-hidden="true" />
                HR/Org. Development
              </li>
              <li>
                <i className="fa fa-hourglass-start" aria-hidden="true" />
                Application Deadline : Jun 27, 2017
              </li>
            </ul>
            <div className="buttons">
              <a href="job-details.html#" className="btn btn-primary">
                <i className="fa fa-briefcase" aria-hidden="true" />
                Apply For This Job
              </a>
              <a href="job-details.html#" className="btn button-bookmark">
                <i className="fa fa-bookmark" aria-hidden="true" />
                Bookmark
              </a>
              <span className="btn button-share">
                <i className="fa fa-share-alt" aria-hidden="true" />
                Share{" "}
                <span>
                  <a href="job-details.html#">
                    <i className="fa fa-facebook" aria-hidden="true" />
                  </a>
                  <a href="job-details.html#">
                    <i className="fa fa-twitter" aria-hidden="true" />
                  </a>
                  <a href="job-details.html#">
                    <i className="fa fa-google-plus" aria-hidden="true" />
                  </a>
                </span>
              </span>
            </div>
          </div>
        </div>
        {/* /.container */}
      </div>
    );
  }
}
