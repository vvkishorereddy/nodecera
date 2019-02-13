import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-top section-padding">
          <div className="container">
            <div className="row">
              <div className="col-sm-3">
                <div className="footer-widget">
                  <h3>About Us</h3>
                  <ul className="tr-list">
                    <li>
                      <a href="index1.html#">About Seeker</a>
                    </li>
                    <li>
                      <a href="index1.html#">Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a href="index1.html#">International Partners</a>
                    </li>
                    <li>
                      <a href="index1.html#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="index1.html#">Feedback</a>
                    </li>
                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="footer-widget">
                  <h3>Job Seekers</h3>
                  <ul className="tr-list">
                    <li>
                      <a href="index1.html#">Create Account</a>
                    </li>
                    <li>
                      <a href="index1.html#">Career Counseling</a>
                    </li>
                    <li>
                      <a href="index1.html#">My Bdjobs</a>
                    </li>
                    <li>
                      <a href="index1.html#">FAQ</a>
                    </li>
                    <li>
                      <a href="index1.html#">Video Guides</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="footer-widget">
                  <h3>Employers</h3>
                  <ul className="tr-list">
                    <li>
                      <a href="index1.html#">Create Account</a>
                    </li>
                    <li>
                      <a href="index1.html#">Products/Service</a>
                    </li>
                    <li>
                      <a href="index1.html#">Post a Job</a>
                    </li>
                    <li>
                      <a href="index1.html#">FAQ</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="footer-widget">
                  <h3>Newsletter</h3>
                  <p>Earum cumque doloribus, incidunt! Tempora voluptatibus</p>
                  <form
                    className="contact-form"
                    method="post"
                    action="index1.html#"
                  >
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        required="required"
                        placeholder="Your email Id"
                      />
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn btn-primary">
                        Sign Up
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </div>
        {/* /.footer-top */}
        <div className="footer-bottom">
          <div className="container">
            <div className="copyright">
              <p>
                Copyright © 2017 <a href="index1.html#">Seeker.com.</a> All
                rights reserved.
              </p>
            </div>
            <div className="footer-social pull-right">
              <ul className="tr-list">
                <li>
                  <a href="index1.html#" title="Facebook">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="index1.html#" title="Twitter">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="index1.html#" title="Google Plus">
                    <i className="fa fa-google-plus" />
                  </a>
                </li>
                <li>
                  <a href="index1.html#" title="Youtube">
                    <i className="fa fa-youtube" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* /.footer-bottom */}
      </div>
    );
  }
}