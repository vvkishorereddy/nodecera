import React, { Component } from "react";

export default class TopBanner extends Component {
  render() {
    return (
      <div className="tr-breadcrumb bg-image section-before">
        <div className="container">
          <div className="breadcrumb-info text-center">
            <div className="user-image">
              <img
                src="images/others/author.png"
                alt="Image"
                className="img-fluid"
              />
            </div>
            <div className="user-title">
              <h1>Jhon Doe</h1>
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
                <a href="employee-profile.html#">
                  <span
                    className="__cf_email__"
                    data-cfemail="b4dedcdbdad0dbd1f4d3d9d5ddd89ad7dbd9"
                  >
                    [email&nbsp;protected]
                  </span>
                </a>
              </li>
              <li>
                <i className="fa fa-briefcase" aria-hidden="true" />
                UI &amp; UX Designer
              </li>
            </ul>
            <ul className="breadcrumb-social social-icon-bg  tr-list">
              <li>
                <a href="employee-profile.html#">
                  <i className="fa fa-facebook" />
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a href="employee-profile.html#">
                  <i className="fa fa-twitter" /> <span>Twitter</span>{" "}
                </a>
              </li>
              <li>
                <a href="employee-profile.html#">
                  <i className="fa fa-google-plus" /> <span>Google Plus</span>{" "}
                </a>
              </li>
              <li>
                <a href="employee-profile.html#">
                  <i className="fa fa-linkedin" />
                  <span>Linkedin</span>{" "}
                </a>
              </li>
              <li>
                <a href="employee-profile.html#">
                  <i className="fa fa-dribbble" /> <span>Dribbble</span>
                </a>
              </li>
              <li>
                <a href="employee-profile.html#">
                  <i className="fa fa-behance" /> <span>Behance</span>
                </a>
              </li>
              <li>
                <a href="employee-profile.html#">
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
