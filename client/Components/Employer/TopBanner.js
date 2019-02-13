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
              <h1>Google inc</h1>
            </div>
            <ul className="job-meta tr-list list-inline">
              <li>
                <i className="fa fa-map-marker" aria-hidden="true" />
                San Francisco, CA, US
              </li>
              <li>
                <i className="fa fa-phone" aria-hidden="true" />
                +0123 456 789
              </li>
              <li>
                <i className="fa fa-envelope" aria-hidden="true" />
                <a href="employer-profile.html#">
                  <span
                    className="__cf_email__"
                    data-cfemail="394a4c4949564b4d795e56565e555c175a5654"
                  >
                    [email&nbsp;protected]
                  </span>
                </a>
              </li>
              <li>
                <i className="fa fa-briefcase" aria-hidden="true" />
                IT Industry
              </li>
              <li>
                <i className="fa fa-black-tie" aria-hidden="true" />
                Company Size: 2K
              </li>
            </ul>
            <ul className="breadcrumb-social social-icon-bg  tr-list">
              <li>
                <a href="employer-profile.html#">
                  <i className="fa fa-facebook" />
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a href="employer-profile.html#">
                  <i className="fa fa-twitter" /> <span>Twitter</span>{" "}
                </a>
              </li>
              <li>
                <a href="employer-profile.html#">
                  <i className="fa fa-google-plus" /> <span>Google Plus</span>{" "}
                </a>
              </li>
              <li>
                <a href="employer-profile.html#">
                  <i className="fa fa-linkedin" />
                  <span>Linkedin</span>{" "}
                </a>
              </li>
              <li>
                <a href="employer-profile.html#">
                  <i className="fa fa-dribbble" /> <span>Dribbble</span>
                </a>
              </li>
              <li>
                <a href="employer-profile.html#">
                  <i className="fa fa-behance" /> <span>Behance</span>
                </a>
              </li>
              <li>
                <a href="employer-profile.html#">
                  <i className="fa fa-globe" /> <span>Website</span>{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* /.container */}
      </div>
    );
  }
}
