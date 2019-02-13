import React, { Component } from "react";

export default class Profile extends Component {
  render() {
    return (
      <div className="tr-profile section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-lg-3">
              <div className="tr-sidebar">
                <ul
                  className="nav nav-tabs profile-tabs section"
                  role="tablist"
                >
                  <li role="presentation">
                    <a
                      className="active"
                      href="employer-profile.html#account-info"
                      aria-controls="account-info"
                      role="tab"
                      data-toggle="tab"
                    >
                      <i className="fa fa-life-ring" aria-hidden="true" />{" "}
                      Account Info
                    </a>
                  </li>
                  <li role="presentation">
                    <a
                      href="employer-profile.html#company-profile"
                      aria-controls="company-profile"
                      role="tab"
                      data-toggle="tab"
                    >
                      <span>
                        <i className="fa fa-user-o" aria-hidden="true" />
                      </span>
                      Company Profile
                    </a>
                  </li>
                  <li role="presentation">
                    <a
                      href="employer-profile.html#edit-profile"
                      aria-controls="edit-profile"
                      role="tab"
                      data-toggle="tab"
                    >
                      <span>
                        <i className="fa fa-user-o" aria-hidden="true" />
                      </span>
                      Edit Company Profile
                    </a>
                  </li>
                  <li role="presentation">
                    <a
                      href="employer-profile.html#open-role"
                      aria-controls="open-role"
                      role="tab"
                      data-toggle="tab"
                    >
                      <span>
                        <i className="fa fa-bell-o" aria-hidden="true" />
                      </span>
                      Open Role
                    </a>
                  </li>
                  <li role="presentation">
                    <a
                      href="employer-profile.html#archived"
                      aria-controls="archived"
                      role="tab"
                      data-toggle="tab"
                    >
                      <span>
                        <i className="fa fa-clone" aria-hidden="true" />
                      </span>
                      Archived Job Post
                    </a>
                  </li>
                  <li role="presentation">
                    <a href="employer-profile.html#">
                      <span>
                        <i className="fa fa-scissors" aria-hidden="true" />
                      </span>
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
              {/* /.tr-sidebar */}
            </div>
            <div className="col-md-8 col-lg-9">
              <div className="tab-content">
                <div
                  role="tabpanel"
                  className="tab-pane fade in show active account-info"
                  id="account-info"
                >
                  <div className="tr-fun-fact">
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="fun-fact media">
                          <div className="fun-fact-icon">
                            <img
                              src="images/icons/fun-fact4.png"
                              alt="images"
                              className="img-fluid"
                            />
                          </div>
                          <div className="media-body">
                            <h1 className="counter">329</h1>
                            <span>Total job post</span>
                          </div>
                        </div>
                        {/* /.fun-fact */}
                      </div>
                      <div className="col-sm-4">
                        <div className="fun-fact media">
                          <div className="fun-fact-icon">
                            <img
                              src="images/icons/fun-fact5.png"
                              alt="images"
                              className="img-fluid"
                            />
                          </div>
                          <div className="media-body">
                            <h1 className="counter">23,563</h1>
                            <span>Application submit</span>
                          </div>
                        </div>
                        {/* /.fun-fact */}
                      </div>
                      <div className="col-sm-4">
                        <div className="fun-fact media">
                          <div className="fun-fact-icon">
                            <img
                              src="images/icons/fun-fact6.png"
                              alt="images"
                              className="img-fluid"
                            />
                          </div>
                          <div className="media-body">
                            <h1 className="counter">27</h1>
                            <span>Call for interview</span>
                          </div>
                        </div>
                        {/* /.fun-fact */}
                      </div>
                    </div>
                    {/* ./row */}
                  </div>
                  {/* /.tr-fun-fact */}
                  <div className="section resume-last-updated">
                    <span className="icon pull-left">
                      <img
                        src="images/icons/1.png"
                        alt="Icon"
                        className="img-fluid"
                      />
                    </span>
                    <div className="updated-info">
                      <span className="pull-left">Profile last updated on</span>
                      <span className="pull-right">24/4/2017</span>
                    </div>
                  </div>
                  {/* /.resume-last-updated */}
                  <div className="section display-information">
                    <div className="title title-after">
                      <div className="icon">
                        <img
                          src="images/icons/2.png"
                          alt="Icon"
                          className="img-fluid"
                        />
                      </div>
                      <span>Your display information</span>
                    </div>
                    <div className="change-photo">
                      <div className="user-image">
                        <img
                          src="images/others/company-logo.png"
                          alt="Image"
                          className="img-fluid"
                        />
                      </div>
                      <div className="upload-photo">
                        <label
                          className="btn btn-primary"
                          htmlFor="upload-photo"
                        >
                          <input type="file" id="upload-photo" />
                          Change Photo
                        </label>
                        <span className="max-size">Max 20 MB</span>
                      </div>
                    </div>
                    <ul className="tr-list account-details">
                      <li>
                        Compnay Name<span>Google Inc</span>
                      </li>
                      <li>
                        Address<span>San Francisco, CA, US</span>
                      </li>
                      <li>
                        Phone Number<span>+0123456789</span>
                      </li>
                      <li>
                        Email Id
                        <span>
                          <a href="employer-profile.html#">
                            <span
                              className="__cf_email__"
                              data-cfemail="412b292e2f252e2401262c20282d6f222e2c"
                            >
                              [email&nbsp;protected]
                            </span>
                          </a>
                        </span>
                      </li>
                      <li>
                        Industry Expertise<span>IT Industry</span>
                      </li>
                      <li>
                        Compnay Size<span>2,000</span>
                      </li>
                    </ul>
                  </div>
                  {/* /.display-information */}
                  <div className="section">
                    <div className="title title-after">
                      <div className="icon">
                        <img
                          src="images/icons/3.png"
                          alt="Icon"
                          className="img-fluid"
                        />
                      </div>
                      <span>Social Link</span>
                    </div>
                    <ul className="social social-icon-bg tr-list">
                      <li>
                        <i className="fa fa-facebook" />
                        <span className="media-body">
                          <a href="employer-profile.html#">
                            https://www.facebook.com/jhondoe
                          </a>
                        </span>
                      </li>
                      <li>
                        <i className="fa fa-twitter" />
                        <span className="media-body">
                          <a href="employer-profile.html#">
                            https://www.twitter.com/jhondoe
                          </a>
                        </span>
                      </li>
                      <li>
                        <i className="fa fa-google-plus" />
                        <span className="media-body">
                          <a href="employer-profile.html#">
                            https://www.googleplus.com/jhondoe
                          </a>
                        </span>
                      </li>
                      <li>
                        <i className="fa fa-linkedin" />
                        <span className="media-body">
                          <a href="employer-profile.html#">
                            https://www.linkedin.com/jhondoe
                          </a>
                        </span>
                      </li>
                      <li>
                        <i className="fa fa-dribbble" />
                        <span className="media-body">
                          <a href="employer-profile.html#">
                            https://www.dribbble.com/jhondoe
                          </a>
                        </span>
                      </li>
                      <li>
                        <i className="fa fa-behance" />
                        <span className="media-body">
                          <a href="employer-profile.html#">
                            https://www.behance.com/jhondoe
                          </a>
                        </span>
                      </li>
                      <li>
                        <i className="fa fa-globe" />
                        <span className="media-body">
                          <a href="employer-profile.html#">
                            https://www.globe.com/jhondoe
                          </a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* /.tab-pane */}
                <div
                  role="tabpanel"
                  className="tab-pane section"
                  id="company-profile"
                >
                  <ul className="tr-list resume-info">
                    <li className="career-objective">
                      <div className="icon">
                        <i className="fa fa-black-tie" aria-hidden="true" />
                      </div>
                      <div className="media-body">
                        <span className="tr-title">Company Info</span>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </p>{" "}
                        <br />
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo. Nemo enim ipsam voluptatem quia voluptas
                          sit aspernatur aut odit aut fugit, sed quia
                          consequuntur magni।
                        </p>
                      </div>
                    </li>
                    {/* /.career-objective */}
                    <li className="mission-vision">
                      <div className="icon">
                        <i className="fa fa-anchor" aria-hidden="true" />
                      </div>
                      <div className="media-body">
                        <span className="tr-title">Mission &amp; Vision</span>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </p>{" "}
                        <br />
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo. Nemo enim ipsam voluptatem quia voluptas
                          sit aspernatur aut odit aut fugit, sed quia
                          consequuntur magni।
                        </p>
                      </div>
                    </li>
                    {/* /.mission-vision */}
                    <li className="company-achievement">
                      <div className="icon">
                        <i className="fa fa-book" aria-hidden="true" />
                      </div>
                      <div className="media-body">
                        <span className="tr-title">Company Achievement</span>
                        <ul className="tr-list">
                          <li>
                            <span>Introducing Our Mobile “Nexus”</span>
                            <ul className="tr-list">
                              <li>Year: 27 May, 2010</li>
                            </ul>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco laboris
                              nisi ut aliquip ex ea commodo consequat.
                            </p>
                          </li>
                          <li>
                            <span>Win Award Stardom</span>
                            <ul className="tr-list">
                              <li>Year: 27 May, 2010</li>
                            </ul>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco laboris
                              nisi ut aliquip ex ea commodo consequat.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </li>
                    {/* /.company-achievement */}
                  </ul>
                  <div className="buttons pull-right">
                    <a
                      href="employer-profile.html#"
                      className="btn button-cancle"
                    >
                      Cancle
                    </a>
                    <a
                      href="employer-profile.html#"
                      className="btn btn-primary"
                    >
                      Update Profile
                    </a>
                  </div>
                </div>
                {/* /.tab-pane */}
                <div
                  role="tabpanel"
                  className="tab-pane section"
                  id="edit-profile"
                >
                  <ul className="tr-list resume-info">
                    <li className="career-objective">
                      <div className="icon">
                        <i className="fa fa-black-tie" aria-hidden="true" />
                      </div>
                      <div className="media-body">
                        <span className="tr-title">Career Objective</span>
                        <div className="code-edit">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                          </p>{" "}
                          <br />
                          <p>
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo. Nemo enim ipsam voluptatem quia
                            voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni।
                          </p>
                        </div>
                      </div>
                    </li>
                    {/* /.career-objective */}
                    <li className="mission-vision">
                      <div className="icon">
                        <i className="fa fa-anchor" aria-hidden="true" />
                      </div>
                      <div className="media-body">
                        <span className="tr-title">Mission &amp; Vision</span>
                        <div className="code-edit">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                          </p>{" "}
                          <br />
                          <p>
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo. Nemo enim ipsam voluptatem quia
                            voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni।
                          </p>
                        </div>
                      </div>
                    </li>
                    {/* /.mission-vision */}
                    <li className="work-history">
                      <div className="icon">
                        <i className="fa fa-book" aria-hidden="true" />
                      </div>
                      <div className="media-body additem-achiev">
                        <span className="tr-title">Company Achievement</span>
                        <div id="achievement" className="additem">
                          <span id="achiev-clone" className="icon clone">
                            <i className="fa fa-plus" aria-hidden="true" />
                          </span>
                          <span className="icon remove">
                            <i className="fa fa-times" aria-hidden="true" />
                          </span>
                          <div className="code-edit-small">
                            <label>Title</label>
                            <div className="code-edit">
                              <span>Introducing Our Mobile “Nexus”</span>
                            </div>
                            <label>Year</label>
                            <div className="calendar">
                              <input
                                type="date"
                                className="form-control"
                                defaultValue="2017-06-25"
                              />
                            </div>
                          </div>
                          <label>Description</label>
                          <div className="code-edit">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco laboris
                              nisi ut aliquip ex ea commodo consequat.
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* /.work-history */}
                  </ul>
                  <div className="buttons pull-right">
                    <a
                      href="employer-profile.html#"
                      className="btn button-cancle"
                    >
                      Cancle
                    </a>
                    <a
                      href="employer-profile.html#"
                      className="btn btn-primary"
                    >
                      Update Profile
                    </a>
                  </div>
                </div>
                {/* /.tab-pane */}
                <div
                  role="tabpanel"
                  className="tab-pane open-role"
                  id="open-role"
                >
                  <div className="role remove-item">
                    <div className="left-content">
                      <div className="clearfix">
                        <span className="tr-title">
                          <a href="employer-profile.html#">Design Associate</a>
                        </span>
                        <span>
                          <a
                            href="employer-profile.html#"
                            className="btn btn-primary"
                          >
                            Part Time
                          </a>
                        </span>
                      </div>
                      <span className="deadline">
                        Application Deadline : Jun 27, 2017
                      </span>
                      <ul className="tr-list job-meta">
                        <li>
                          <span>
                            <i className="fa fa-map-signs" aria-hidden="true" />
                          </span>
                          San Francisco, CA, US
                        </li>
                        <li>
                          <span>
                            <i className="fa fa-briefcase" aria-hidden="true" />
                          </span>
                          Mid Level
                        </li>
                        <li>
                          <span>
                            <i className="fa fa-money" aria-hidden="true" />
                          </span>
                          $5,000 - $6,000
                        </li>
                      </ul>
                    </div>
                    <div className="right-content">
                      <span>
                        <a href="employer-profile.html#">
                          <i className="fa fa-pencil" />
                        </a>
                      </span>
                      <span className="remove-icon">
                        <i className="fa fa-trash-o" />
                      </span>
                    </div>
                  </div>
                  {/* /.role */}
                  <div className="role remove-item">
                    <div className="left-content">
                      <div className="clearfix">
                        <span className="tr-title">
                          <a href="employer-profile.html#">Design Associate</a>
                        </span>
                        <span>
                          <a
                            href="employer-profile.html#"
                            className="btn btn-primary"
                          >
                            Part Time
                          </a>
                        </span>
                      </div>
                      <span className="deadline">
                        Application Deadline : Jun 27, 2017
                      </span>
                      <ul className="tr-list job-meta">
                        <li>
                          <span>
                            <i className="fa fa-map-signs" aria-hidden="true" />
                          </span>
                          San Francisco, CA, US
                        </li>
                        <li>
                          <span>
                            <i className="fa fa-briefcase" aria-hidden="true" />
                          </span>
                          Mid Level
                        </li>
                        <li>
                          <span>
                            <i className="fa fa-money" aria-hidden="true" />
                          </span>
                          $5,000 - $6,000
                        </li>
                      </ul>
                    </div>
                    <div className="right-content">
                      <span>
                        <a href="employer-profile.html#">
                          <i className="fa fa-pencil" />
                        </a>
                      </span>
                      <span className="remove-icon">
                        <i className="fa fa-trash-o" />
                      </span>
                    </div>
                  </div>
                  {/* /.role */}
                  <div className="role remove-item">
                    <div className="left-content">
                      <div className="clearfix">
                        <span className="tr-title">
                          <a href="employer-profile.html#">Design Associate</a>
                        </span>
                        <span>
                          <a
                            href="employer-profile.html#"
                            className="btn btn-primary"
                          >
                            Part Time
                          </a>
                        </span>
                      </div>
                      <span className="deadline">
                        Application Deadline : Jun 27, 2017
                      </span>
                      <ul className="tr-list job-meta">
                        <li>
                          <span>
                            <i className="fa fa-map-signs" aria-hidden="true" />
                          </span>
                          San Francisco, CA, US
                        </li>
                        <li>
                          <span>
                            <i className="fa fa-briefcase" aria-hidden="true" />
                          </span>
                          Mid Level
                        </li>
                        <li>
                          <span>
                            <i className="fa fa-money" aria-hidden="true" />
                          </span>
                          $5,000 - $6,000
                        </li>
                      </ul>
                    </div>
                    <div className="right-content">
                      <span>
                        <a href="employer-profile.html#">
                          <i className="fa fa-pencil" />
                        </a>
                      </span>
                      <span className="remove-icon">
                        <i className="fa fa-trash-o" />
                      </span>
                    </div>
                  </div>
                  {/* /.role */}
                  <div className="role remove-item">
                    <div className="left-content">
                      <div className="clearfix">
                        <span className="tr-title">
                          <a href="employer-profile.html#">Design Associate</a>
                        </span>
                        <span>
                          <a
                            href="employer-profile.html#"
                            className="btn btn-primary"
                          >
                            Part Time
                          </a>
                        </span>
                      </div>
                      <span className="deadline">
                        Application Deadline : Jun 27, 2017
                      </span>
                      <ul className="tr-list job-meta">
                        <li>
                          <span>
                            <i className="fa fa-map-signs" aria-hidden="true" />
                          </span>
                          San Francisco, CA, US
                        </li>
                        <li>
                          <span>
                            <i className="fa fa-briefcase" aria-hidden="true" />
                          </span>
                          Mid Level
                        </li>
                        <li>
                          <span>
                            <i className="fa fa-money" aria-hidden="true" />
                          </span>
                          $5,000 - $6,000
                        </li>
                      </ul>
                    </div>
                    <div className="right-content">
                      <span>
                        <a href="employer-profile.html#">
                          <i className="fa fa-pencil" />
                        </a>
                      </span>
                      <span className="remove-icon">
                        <i className="fa fa-trash-o" />
                      </span>
                    </div>
                  </div>
                  {/* /.role */}
                  <div className="role remove-item">
                    <div className="left-content">
                      <div className="clearfix">
                        <span className="tr-title">
                          <a href="employer-profile.html#">Design Associate</a>
                        </span>
                        <span>
                          <a
                            href="employer-profile.html#"
                            className="btn btn-primary"
                          >
                            Part Time
                          </a>
                        </span>
                      </div>
                      <span className="deadline">
                        Application Deadline : Jun 27, 2017
                      </span>
                      <ul className="tr-list job-meta">
                        <li>
                          <span>
                            <i className="fa fa-map-signs" aria-hidden="true" />
                          </span>
                          San Francisco, CA, US
                        </li>
                        <li>
                          <span>
                            <i className="fa fa-briefcase" aria-hidden="true" />
                          </span>
                          Mid Level
                        </li>
                        <li>
                          <span>
                            <i className="fa fa-money" aria-hidden="true" />
                          </span>
                          $5,000 - $6,000
                        </li>
                      </ul>
                    </div>
                    <div className="right-content">
                      <span>
                        <a href="employer-profile.html#">
                          <i className="fa fa-pencil" />
                        </a>
                      </span>
                      <span className="remove-icon">
                        <i className="fa fa-trash-o" />
                      </span>
                    </div>
                  </div>
                  {/* /.role */}
                  <div className="role remove-item">
                    <div className="left-content">
                      <div className="clearfix">
                        <span className="tr-title">
                          <a href="employer-profile.html#">Design Associate</a>
                        </span>
                        <span>
                          <a
                            href="employer-profile.html#"
                            className="btn btn-primary"
                          >
                            Part Time
                          </a>
                        </span>
                      </div>
                      <span className="deadline">
                        Application Deadline : Jun 27, 2017
                      </span>
                      <ul className="tr-list job-meta">
                        <li>
                          <span>
                            <i className="fa fa-map-signs" aria-hidden="true" />
                          </span>
                          San Francisco, CA, US
                        </li>
                        <li>
                          <span>
                            <i className="fa fa-briefcase" aria-hidden="true" />
                          </span>
                          Mid Level
                        </li>
                        <li>
                          <span>
                            <i className="fa fa-money" aria-hidden="true" />
                          </span>
                          $5,000 - $6,000
                        </li>
                      </ul>
                    </div>
                    <div className="right-content">
                      <span>
                        <a href="employer-profile.html#">
                          <i className="fa fa-pencil" />
                        </a>
                      </span>
                      <span className="remove-icon">
                        <i className="fa fa-trash-o" />
                      </span>
                    </div>
                  </div>
                  {/* /.role */}
                  <div className="role remove-item">
                    <div className="left-content">
                      <div className="clearfix">
                        <span className="tr-title">
                          <a href="employer-profile.html#">Design Associate</a>
                        </span>
                        <span>
                          <a
                            href="employer-profile.html#"
                            className="btn btn-primary"
                          >
                            Part Time
                          </a>
                        </span>
                      </div>
                      <span className="deadline">
                        Application Deadline : Jun 27, 2017
                      </span>
                      <ul className="tr-list job-meta">
                        <li>
                          <span>
                            <i className="fa fa-map-signs" aria-hidden="true" />
                          </span>
                          San Francisco, CA, US
                        </li>
                        <li>
                          <span>
                            <i className="fa fa-briefcase" aria-hidden="true" />
                          </span>
                          Mid Level
                        </li>
                        <li>
                          <span>
                            <i className="fa fa-money" aria-hidden="true" />
                          </span>
                          $5,000 - $6,000
                        </li>
                      </ul>
                    </div>
                    <div className="right-content">
                      <span>
                        <a href="employer-profile.html#">
                          <i className="fa fa-pencil" />
                        </a>
                      </span>
                      <span className="remove-icon">
                        <i className="fa fa-trash-o" />
                      </span>
                    </div>
                  </div>
                  {/* /.role */}
                </div>
                {/* /.tab-pane */}
                <div
                  role="tabpanel"
                  className="tab-pane archived-job"
                  id="archived"
                >
                  <div className="job-item remove-item">
                    <div className="job-info">
                      <div className="left-content">
                        <div className="clearfix">
                          <span className="tr-title">
                            <a href="job-post.html">Design Associate</a>
                          </span>
                          <span>
                            <a
                              href="employer-profile.html#"
                              className="btn btn-primary"
                            >
                              Part Time
                            </a>
                          </span>
                        </div>
                        <span className="deadline">
                          Application Deadline : Jun 27, 2017
                        </span>
                      </div>
                      <div className="right-content">
                        <span className="remove-icon">
                          <i className="fa fa-trash-o" />
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* /.job-item */}
                  <div className="job-item remove-item">
                    <div className="job-info">
                      <div className="left-content">
                        <div className="clearfix">
                          <span className="tr-title">
                            <a href="job-post.html">Design Associate</a>
                          </span>
                          <span>
                            <a
                              href="employer-profile.html#"
                              className="btn btn-primary"
                            >
                              Part Time
                            </a>
                          </span>
                        </div>
                        <span className="deadline">
                          Application Deadline : Jun 27, 2017
                        </span>
                      </div>
                      <div className="right-content">
                        <span className="remove-icon">
                          <i className="fa fa-trash-o" />
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* /.job-item */}
                  <div className="job-item remove-item">
                    <div className="job-info">
                      <div className="left-content">
                        <div className="clearfix">
                          <span className="tr-title">
                            <a href="job-post.html">Design Associate</a>
                          </span>
                          <span>
                            <a
                              href="employer-profile.html#"
                              className="btn btn-primary"
                            >
                              Part Time
                            </a>
                          </span>
                        </div>
                        <span className="deadline">
                          Application Deadline : Jun 27, 2017
                        </span>
                      </div>
                      <div className="right-content">
                        <span className="remove-icon">
                          <i className="fa fa-trash-o" />
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* /.job-item */}
                  <div className="job-item remove-item">
                    <div className="job-info">
                      <div className="left-content">
                        <div className="clearfix">
                          <span className="tr-title">
                            <a href="job-post.html">Design Associate</a>
                          </span>
                          <span>
                            <a
                              href="employer-profile.html#"
                              className="btn btn-primary"
                            >
                              Part Time
                            </a>
                          </span>
                        </div>
                        <span className="deadline">
                          Application Deadline : Jun 27, 2017
                        </span>
                      </div>
                      <div className="right-content">
                        <span className="remove-icon">
                          <i className="fa fa-trash-o" />
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* /.job-item */}
                  <div className="job-item remove-item">
                    <div className="job-info">
                      <div className="left-content">
                        <div className="clearfix">
                          <span className="tr-title">
                            <a href="job-post.html">Design Associate</a>
                          </span>
                          <span>
                            <a
                              href="employer-profile.html#"
                              className="btn btn-primary"
                            >
                              Part Time
                            </a>
                          </span>
                        </div>
                        <span className="deadline">
                          Application Deadline : Jun 27, 2017
                        </span>
                      </div>
                      <div className="right-content">
                        <span className="remove-icon">
                          <i className="fa fa-trash-o" />
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* /.job-item */}
                  <div className="job-item remove-item">
                    <div className="job-info">
                      <div className="left-content">
                        <div className="clearfix">
                          <span className="tr-title">
                            <a href="job-post.html">Design Associate</a>
                          </span>
                          <span>
                            <a
                              href="employer-profile.html#"
                              className="btn btn-primary"
                            >
                              Part Time
                            </a>
                          </span>
                        </div>
                        <span className="deadline">
                          Application Deadline : Jun 27, 2017
                        </span>
                      </div>
                      <div className="right-content">
                        <span className="remove-icon">
                          <i className="fa fa-trash-o" />
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* /.job-item */}
                  <div className="job-item remove-item">
                    <div className="job-info">
                      <div className="left-content">
                        <div className="clearfix">
                          <span className="tr-title">
                            <a href="job-post.html">Design Associate</a>
                          </span>
                          <span>
                            <a
                              href="employer-profile.html#"
                              className="btn btn-primary"
                            >
                              Part Time
                            </a>
                          </span>
                        </div>
                        <span className="deadline">
                          Application Deadline : Jun 27, 2017
                        </span>
                      </div>
                      <div className="right-content">
                        <span className="remove-icon">
                          <i className="fa fa-trash-o" />
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* /.job-item */}
                  <div className="job-item remove-item">
                    <div className="job-info">
                      <div className="left-content">
                        <div className="clearfix">
                          <span className="tr-title">
                            <a href="job-post.html">Design Associate</a>
                          </span>
                          <span>
                            <a
                              href="employer-profile.html#"
                              className="btn btn-primary"
                            >
                              Part Time
                            </a>
                          </span>
                        </div>
                        <span className="deadline">
                          Application Deadline : Jun 27, 2017
                        </span>
                      </div>
                      <div className="right-content">
                        <span className="remove-icon">
                          <i className="fa fa-trash-o" />
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* /.job-item */}
                  <div className="job-item remove-item">
                    <div className="job-info">
                      <div className="left-content">
                        <div className="clearfix">
                          <span className="tr-title">
                            <a href="job-post.html">Design Associate</a>
                          </span>
                          <span>
                            <a
                              href="employer-profile.html#"
                              className="btn btn-primary"
                            >
                              Part Time
                            </a>
                          </span>
                        </div>
                        <span className="deadline">
                          Application Deadline : Jun 27, 2017
                        </span>
                      </div>
                      <div className="right-content">
                        <span className="remove-icon">
                          <i className="fa fa-trash-o" />
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* /.job-item */}
                </div>
                {/* /.tab-pane */}
              </div>
            </div>
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </div>
    );
  }
}
