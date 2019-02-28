import React, { Component } from "react";

export default class ContactForm extends Component {
  render() {
    return (
      <div className="page-content">
        <div className="container">
          {/* /.tr-map */}
          <div className="contact-section">
            <div className="row">
              <div className="col-md-8">
                <div className="section">
                  <span className="tr-title">Contact Info</span>
                  <p>
                    There are many variations of passages of lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words
                  </p>
                  <form action="contact.html#" className="tr-form">
                    <div className="row">
                      <div className="col-sm-6">
                        <input
                          type="text"
                          className="form-control"
                          required="required"
                          placeholder="Full Name"
                        />
                      </div>
                      <div className="col-sm-6">
                        <input
                          type="email"
                          className="form-control"
                          required="required"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        required="required"
                        placeholder="Subject"
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        name="message"
                        className="form-control"
                        required="required"
                        rows={5}
                        placeholder="Message"
                        defaultValue={""}
                      />
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        className="btn btn-primary pull-right"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-4">
                <div className="section">
                  <span className="tr-title">Contact Info</span>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <ul className="tr-list info-list">
                    <li className="media">
                      <i className="fa fa-map-signs" aria-hidden="true" />{" "}
                      <span className="media-body">
                        <span>44 Shirley Ave.</span> West Chicago, IL 60185
                      </span>
                    </li>
                    <li className="media">
                      <i className="fa fa-phone" aria-hidden="true" />{" "}
                      <span className="media-body">
                        <span>+0123 456 789</span> +0987 654 321
                      </span>
                    </li>
                    <li className="media">
                      <i className="fa fa-envelope-o" aria-hidden="true" />{" "}
                      <span className="media-body">
                        <span>
                          <a href="contact.html#">
                            <span
                              className="__cf_email__"
                              data-cfemail="a6cfc8c0c9e6c3cbc7cfca88c5c9cb"
                            >
                              [email&nbsp;protected]
                            </span>
                          </a>
                        </span>{" "}
                        <a href="contact.html#">
                          <span
                            className="__cf_email__"
                            data-cfemail="10636560607f626450757d71797c3e737f7d"
                          >
                            [email&nbsp;protected]
                          </span>
                        </a>
                      </span>
                    </li>
                  </ul>
                  <span className="tr-title">Social Network</span>
                  <div className="social">
                    <ul className="tr-list">
                      <li>
                        <a href="contact.html#" title="Facebook">
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="contact.html#" title="Twitter">
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="contact.html#" title="Google Plus">
                          <i className="fa fa-google-plus" />
                        </a>
                      </li>
                      <li>
                        <a href="contact.html#" title="Youtube">
                          <i className="fa fa-youtube" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}
      </div>
    );
  }
}
