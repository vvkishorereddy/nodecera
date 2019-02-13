import React, { Component } from 'react'

export default class JobsList extends Component {
  render() {
    return (
        <div className="jobs-listing section-padding">
        <div className="container">
          <div className="job-topbar">
            <span className="pull-left">Filter jobs by</span>
            <ul className="nav nav-tabs job-tabs" role="tablist">
              <li>235 Total jobs</li>
              <li role="presentation" className="active"><a href="listing.html#four-colum" aria-controls="four-colum" role="tab" data-toggle="tab"><i className="fa fa-th" aria-hidden="true" /></a></li>
              <li role="presentation"><a href="listing.html#two-column" aria-controls="two-column" role="tab" data-toggle="tab"><i className="fa fa-th-list" aria-hidden="true" /></a></li>
            </ul>				
          </div>
          <div className="list-menu text-center clearfix">
            <ul className="tr-list">
              <li className="dropdown tr-change-dropdown">	
                Category:					
                <a data-toggle="dropdown" href="listing.html#" aria-expanded="false"><span className="change-text">Designer</span><i className="fa fa-angle-down" /></a>
                <ul className="dropdown-menu tr-change">
                  <li><a href="listing.html#">Designer</a></li>
                  <li><a href="listing.html#">Marketing</a></li>
                  <li><a href="listing.html#">Developement</a></li>
                </ul>								
              </li>
              <li className="dropdown tr-change-dropdown">	
                Level:					
                <a data-toggle="dropdown" href="listing.html#" aria-expanded="false"><span className="change-text">Mid</span><i className="fa fa-angle-down" /></a>
                <ul className="dropdown-menu tr-change">
                  <li><a href="listing.html#">Top Level</a></li>
                  <li><a href="listing.html#">Mid Level</a></li>
                  <li><a href="listing.html#">Entry Level</a></li>
                </ul>								
              </li>
              <li className="dropdown tr-change-dropdown">	
                Org Type:					
                <a data-toggle="dropdown" href="listing.html#" aria-expanded="false"><span className="change-text">Private</span><i className="fa fa-angle-down" /></a>
                <ul className="dropdown-menu tr-change">
                  <li><a href="listing.html#">Private</a></li>
                  <li><a href="listing.html#">public</a></li>
                </ul>								
              </li>
              <li className="dropdown tr-change-dropdown">	
                Location:					
                <a data-toggle="dropdown" href="listing.html#" aria-expanded="false"><span className="change-text">USA</span><i className="fa fa-angle-down" /></a>
                <ul className="dropdown-menu tr-change">
                  <li><a href="listing.html#">USA</a></li>
                  <li><a href="listing.html#">London</a></li>
                  <li><a href="listing.html#">New York</a></li>
                </ul>								
              </li>
              <li className="dropdown tr-change-dropdown">	
                Salary:					
                <a data-toggle="dropdown" href="listing.html#" aria-expanded="false"><span className="change-text">0 - 50K</span><i className="fa fa-angle-down" /></a>
                <ul className="dropdown-menu tr-change">
                  <li><a href="listing.html#">0 - 50K</a></li>
                  <li><a href="listing.html#">50k - 70K</a></li>
                  <li><a href="listing.html#">70k - 85K</a></li>
                </ul>								
              </li>
            </ul>				
          </div>{/* /.list-menu */}
          <div className="tab-content tr-job-posted">
            <div role="tabpanel" className="tab-pane fade show active" id="four-colum">
              <div className="row">
                <div className="col-md-6 col-lg-3">
                  <div className="job-item">
                    <div className="item-overlay">
                      <div className="job-info">
                        <a href="listing.html#" className="btn btn-primary">Full Time</a>
                        <span className="tr-title">
                          <a href="job-details.html">Project Manager</a>
                          <span><a href="listing.html#">Dig File</a></span>
                        </span>
                        <ul className="tr-list job-meta">
                          <li><i className="fa fa-map-signs" aria-hidden="true" />San Francisco, CA, US</li>
                          <li><i className="fa fa-briefcase" aria-hidden="true" />Mid Level</li>
                          <li><i className="fa fa-money" aria-hidden="true" />$5,000 - $6,000</li>
                        </ul>
                        <ul className="job-social tr-list">
                          <li><a href="listing.html#"><i className="fa fa-heart-o" aria-hidden="true" /></a></li>
                          <li><a href="listing.html#"><i className="fa fa-expand" aria-hidden="true" /></a></li>
                          <li><a href="listing.html#"><i className="fa fa-bookmark-o" aria-hidden="true" /></a></li>
                          <li><a href="job-details.html"><i className="fa fa-long-arrow-right" aria-hidden="true" /></a></li>
                        </ul>
                      </div>										
                    </div>
                    <div className="job-info">
                      <div className="company-logo">
                        <img src="images/job/1.png" alt="images" className="img-fluid" />
                      </div>
                      <span className="tr-title">
                        <a href="listing.html#">Project Manager</a>
                        <span><a href="listing.html#">Dig File</a></span>
                      </span>
                      <ul className="tr-list job-meta">
                        <li><span><i className="fa fa-map-signs" aria-hidden="true" /></span>San Francisco, CA, US</li>
                        <li><span><i className="fa fa-briefcase" aria-hidden="true" /></span>Mid Level</li>
                        <li><span><i className="fa fa-money" aria-hidden="true" /></span>$5,000 - $6,000</li>
                      </ul>
                      <div className="time">
                        <a href="listing.html#"><span>Full Time</span></a>
                        <span className="pull-right">Posted 23 hours ago</span>
                      </div>																				
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="job-item">
                    <div className="item-overlay">
                      <div className="job-info">
                        <a href="listing.html#" className="btn btn-primary">Part Time</a>
                        <span className="tr-title">
                          <a href="job-details.html">Design Associate</a>
                          <span><a href="listing.html#">Loop</a></span>
                        </span>
                        <ul className="tr-list job-meta">
                          <li><i className="fa fa-map-signs" aria-hidden="true" />San Francisco, CA, US</li>
                          <li><i className="fa fa-briefcase" aria-hidden="true" />Mid Level</li>
                          <li><i className="fa fa-money" aria-hidden="true" />$5,000 - $6,000</li>
                        </ul>
                        <ul className="job-social tr-list">
                          <li><a href="listing.html#"><i className="fa fa-heart-o" aria-hidden="true" /></a></li>
                          <li><a href="listing.html#"><i className="fa fa-expand" aria-hidden="true" /></a></li>
                          <li><a href="listing.html#"><i className="fa fa-bookmark-o" aria-hidden="true" /></a></li>
                          <li><a href="job-details.html"><i className="fa fa-long-arrow-right" aria-hidden="true" /></a></li>
                        </ul>
                      </div>										
                    </div>								
                    <div className="job-info">
                      <div className="company-logo">
                        <img src="images/job/2.png" alt="images" className="img-fluid" />
                      </div>
                      <span className="tr-title">
                        <a href="listing.html#">Design Associate</a>
                        <span><a href="listing.html#">Loop</a></span>
                      </span>
                      <ul className="tr-list job-meta">
                        <li><span><i className="fa fa-map-signs" aria-hidden="true" /></span>San Francisco, CA, US</li>
                        <li><span><i className="fa fa-briefcase" aria-hidden="true" /></span>Mid Level</li>
                        <li><span><i className="fa fa-money" aria-hidden="true" /></span>$5,000 - $6,000</li>
                      </ul>
                      <div className="time">
                        <a href="listing.html#"><span className="part-time">Part Time</span></a>
                        <span className="pull-right">Posted 1 day ago</span>
                      </div>			
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="job-item">
                    <div className="item-overlay">
                      <div className="job-info">
                        <a href="listing.html#" className="btn btn-primary">Freelance</a>
                        <span className="tr-title">
                          <a href="job-details.html">Graphic Designer</a>
                          <span><a href="listing.html#">Humanity Creative</a></span>
                        </span>
                        <ul className="tr-list job-meta">
                          <li><i className="fa fa-map-signs" aria-hidden="true" />San Francisco, CA, US</li>
                          <li><i className="fa fa-briefcase" aria-hidden="true" />Mid Level</li>
                          <li><i className="fa fa-money" aria-hidden="true" />$5,000 - $6,000</li>
                        </ul>
                        <ul className="job-social tr-list">
                          <li><a href="listing.html#"><i className="fa fa-heart-o" aria-hidden="true" /></a></li>
                          <li><a href="listing.html#"><i className="fa fa-expand" aria-hidden="true" /></a></li>
                          <li><a href="listing.html#"><i className="fa fa-bookmark-o" aria-hidden="true" /></a></li>
                          <li><a href="job-details.html"><i className="fa fa-long-arrow-right" aria-hidden="true" /></a></li>
                        </ul>
                      </div>										
                    </div>								
                    <div className="job-info">
                      <div className="company-logo">
                        <img src="images/job/3.png" alt="images" className="img-fluid" />
                      </div>
                      <span className="tr-title">
                        <a href="listing.html#">Graphic Designer</a>
                        <span><a href="listing.html#">Humanity Creative</a></span>
                      </span>
                      <ul className="tr-list job-meta">
                        <li><span><i className="fa fa-map-signs" aria-hidden="true" /></span>San Francisco, CA, US</li>
                        <li><span><i className="fa fa-briefcase" aria-hidden="true" /></span>Mid Level</li>
                        <li><span><i className="fa fa-money" aria-hidden="true" /></span>$5,000 - $6,000</li>
                      </ul>
                      <div className="time">
                        <a href="listing.html#"><span className="freelance">Freelance</span></a>
                        <span className="pull-right">Posted 10 day ago</span>
                      </div>			
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="job-item">
                    <div className="item-overlay">
                      <div className="job-info">
                        <a href="listing.html#" className="btn btn-primary">Full Time</a>
                        <span className="tr-title">
                          <a href="job-details.html">Design Consultant</a>
                          <span><a href="listing.html#">Families</a></span>
                        </span>
                        <ul className="tr-list job-meta">
                          <li><i className="fa fa-map-signs" aria-hidden="true" />San Francisco, CA, US</li>
                          <li><i className="fa fa-briefcase" aria-hidden="true" />Mid Level</li>
                          <li><i className="fa fa-money" aria-hidden="true" />$5,000 - $6,000</li>
                        </ul>
                        <ul className="job-social tr-list">
                          <li><a href="listing.html#"><i className="fa fa-heart-o" aria-hidden="true" /></a></li>
                          <li><a href="listing.html#"><i className="fa fa-expand" aria-hidden="true" /></a></li>
                          <li><a href="listing.html#"><i className="fa fa-bookmark-o" aria-hidden="true" /></a></li>
                          <li><a href="job-details.html"><i className="fa fa-long-arrow-right" aria-hidden="true" /></a></li>
                        </ul>
                      </div>										
                    </div>								
                    <div className="job-info">
                      <div className="company-logo">
                        <img src="images/job/4.png" alt="images" className="img-fluid" />
                      </div>
                      <span className="tr-title">
                        <a href="listing.html#">Design Consultant</a>
                        <span><a href="listing.html#">Families</a></span>
                      </span>
                      <ul className="tr-list job-meta">
                        <li><span><i className="fa fa-map-signs" aria-hidden="true" /></span>San Francisco, CA, US</li>
                        <li><span><i className="fa fa-briefcase" aria-hidden="true" /></span>Mid Level</li>
                        <li><span><i className="fa fa-money" aria-hidden="true" /></span>$5,000 - $6,000</li>
                      </ul>
                      <div className="time">
                        <a href="listing.html#"><span>Full Time</span></a>
                        <span className="pull-right">Posted Oct 09, 2017</span>
                      </div>				
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="job-item">
                    <div className="item-overlay">
                      <div className="job-info">
                        <a href="listing.html#" className="btn btn-primary">Part Time</a>
                        <span className="tr-title">
                          <a href="job-details.html">Project Manager</a>
                          <span><a href="listing.html#">Sky Creative</a></span>
                        </span>
                        <ul className="tr-list job-meta">
                          <li><i className="fa fa-map-signs" aria-hidden="true" />San Francisco, CA, US</li>
                          <li><i className="fa fa-briefcase" aria-hidden="true" />Mid Level</li>
                          <li><i className="fa fa-money" aria-hidden="true" />$5,000 - $6,000</li>
                        </ul>
                        <ul className="job-social tr-list">
                          <li><a href="listing.html#"><i className="fa fa-heart-o" aria-hidden="true" /></a></li>
                          <li><a href="listing.html#"><i className="fa fa-expand" aria-hidden="true" /></a></li>
                          <li><a href="listing.html#"><i className="fa fa-bookmark-o" aria-hidden="true" /></a></li>
                          <li><a href="job-details.html"><i className="fa fa-long-arrow-right" aria-hidden="true" /></a></li>
                        </ul>
                      </div>										
                    </div>								
                    <div className="job-info">
                      <div className="company-logo">
                        <img src="images/job/5.png" alt="images" className="img-fluid" />
                      </div>
                      <span className="tr-title">
                        <a href="listing.html#">Project Manager</a>
                        <span><a href="listing.html#">Sky Creative</a></span>
                      </span>
                      <ul className="tr-list job-meta">
                        <li><span><i className="fa fa-map-signs" aria-hidden="true" /></span>San Francisco, CA, US</li>
                        <li><span><i className="fa fa-briefcase" aria-hidden="true" /></span>Mid Level</li>
                        <li><span><i className="fa fa-money" aria-hidden="true" /></span>$5,000 - $6,000</li>
                      </ul>	
                      <div className="time">
                        <a href="listing.html#"><span className="part-time">Part Time</span></a>
                        <span className="pull-right">Posted 1 day ago</span>
                      </div>			
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="job-item">
                    <div className="item-overlay">
                      <div className="job-info">
                        <a href="listing.html#" className="btn btn-primary">Freelance</a>
                        <span className="tr-title">
                          <a href="job-details.html">Design Associate</a>
                          <span><a href="listing.html#">Pencil</a></span>
                        </span>
                        <ul className="tr-list job-meta">
                          <li><i className="fa fa-map-signs" aria-hidden="true" />San Francisco, CA, US</li>
                          <li><i className="fa fa-briefcase" aria-hidden="true" />Mid Level</li>
                          <li><i className="fa fa-money" aria-hidden="true" />$5,000 - $6,000</li>
                        </ul>
                        <ul className="job-social tr-list">
                          <li><a href="listing.html#"><i className="fa fa-heart-o" aria-hidden="true" /></a></li>
                          <li><a href="listing.html#"><i className="fa fa-expand" aria-hidden="true" /></a></li>
                          <li><a href="listing.html#"><i className="fa fa-bookmark-o" aria-hidden="true" /></a></li>
                          <li><a href="job-details.html"><i className="fa fa-long-arrow-right" aria-hidden="true" /></a></li>
                        </ul>
                      </div>										
                    </div>								
                    <div className="job-info">
                      <div className="company-logo">
                        <img src="images/job/6.png" alt="images" className="img-fluid" />
                      </div>
                      <span className="tr-title">
                        <a href="listing.html#">Design Associate</a>
                        <span><a href="listing.html#">Pencil</a></span>
                      </span>
                      <ul className="tr-list job-meta">
                        <li><span><i className="fa fa-map-signs" aria-hidden="true" /></span>San Francisco, CA, US</li>
                        <li><span><i className="fa fa-briefcase" aria-hidden="true" /></span>Mid Level</li>
                        <li><span><i className="fa fa-money" aria-hidden="true" /></span>$5,000 - $6,000</li>
                      </ul>
                      <div className="time">
                        <a href="listing.html#"><span className="freelance">Freelance</span></a>
                        <span className="pull-right">Posted 23 hours ago</span>
                      </div>				
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="job-item">
                    <div className="item-overlay">
                      <div className="job-info">
                        <a href="listing.html#" className="btn btn-primary">Full Time</a>
                        <span className="tr-title">
                          <a href="job-details.html">Graphic Designer</a>
                          <span><a href="listing.html#">Fox</a></span>
                        </span>
                        <ul className="tr-list job-meta">
                          <li><i className="fa fa-map-signs" aria-hidden="true" />San Francisco, CA, US</li>
                          <li><i className="fa fa-briefcase" aria-hidden="true" />Mid Level</li>
                          <li><i className="fa fa-money" aria-hidden="true" />$5,000 - $6,000</li>
                        </ul>
                        <ul className="job-social tr-list">
                          <li><a href="listing.html#"><i className="fa fa-heart-o" aria-hidden="true" /></a></li>
                          <li><a href="listing.html#"><i className="fa fa-expand" aria-hidden="true" /></a></li>
                          <li><a href="listing.html#"><i className="fa fa-bookmark-o" aria-hidden="true" /></a></li>
                          <li><a href="job-details.html"><i className="fa fa-long-arrow-right" aria-hidden="true" /></a></li>
                        </ul>
                      </div>										
                    </div>								
                    <div className="job-info">
                      <div className="company-logo">
                        <img src="images/job/7.png" alt="images" className="img-fluid" />
                      </div>
                      <span className="tr-title">
                        <a href="listing.html#">Graphic Designer</a>
                        <span><a href="listing.html#">Fox</a></span>
                      </span>
                      <ul className="tr-list job-meta">
                        <li><span><i className="fa fa-map-signs" aria-hidden="true" /></span>San Francisco, CA, US</li>
                        <li><span><i className="fa fa-briefcase" aria-hidden="true" /></span>Mid Level</li>
                        <li><span><i className="fa fa-money" aria-hidden="true" /></span>$5,000 - $6,000</li>
                      </ul>
                      <div className="time">
                        <a href="listing.html#"><span>Full Time</span></a>
                        <span className="pull-right">Posted Oct 09, 2017</span>
                      </div>				
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="job-item">
                    <div className="item-overlay">
                      <div className="job-info">
                        <a href="listing.html#"><span className="btn btn-primary">Part Time</span></a>
                        <span className="tr-title">
                          <a href="job-details.html">Design Consultant</a>
                          <span><a href="listing.html#">Owl</a></span>
                        </span>
                        <ul className="tr-list job-meta">
                          <li><i className="fa fa-map-signs" aria-hidden="true" />San Francisco, CA, US</li>
                          <li><i className="fa fa-briefcase" aria-hidden="true" />Mid Level</li>
                          <li><i className="fa fa-money" aria-hidden="true" />$5,000 - $6,000</li>
                        </ul>
                        <ul className="job-social tr-list">
                          <li><a href="listing.html#"><i className="fa fa-heart-o" aria-hidden="true" /></a></li>
                          <li><a href="listing.html#"><i className="fa fa-expand" aria-hidden="true" /></a></li>
                          <li><a href="listing.html#"><i className="fa fa-bookmark-o" aria-hidden="true" /></a></li>
                          <li><a href="job-details.html"><i className="fa fa-long-arrow-right" aria-hidden="true" /></a></li>
                        </ul>
                      </div>										
                    </div>								
                    <div className="job-info">
                      <div className="company-logo">
                        <img src="images/job/8.png" alt="images" className="img-fluid" />
                      </div>
                      <span className="tr-title">
                        <a href="listing.html#">Design Consultant</a>
                        <span><a href="listing.html#">Owl</a></span>
                      </span>
                      <ul className="tr-list job-meta">
                        <li><span><i className="fa fa-map-signs" aria-hidden="true" /></span>San Francisco, CA, US</li>
                        <li><span><i className="fa fa-briefcase" aria-hidden="true" /></span>Mid Level</li>
                        <li><span><i className="fa fa-money" aria-hidden="true" /></span>$5,000 - $6,000</li>
                      </ul>
                      <div className="time">
                        <a href="listing.html#"><span className="part-time">Part Time</span></a>
                        <span className="pull-right">Posted 10 day ago</span>
                      </div>			
                    </div>
                  </div>
                </div>
              </div>{/* /.row */}
              <div className="tr-cta">
                <div className="cta-content section">
                  <div className="cta-info">
                    <div className="pull-left">
                      <h1>Add your resume and let your next job find you.</h1>
                    </div>
                    <a href="listing.html#" className="btn btn-primary pull-right">Add Your Resume</a>
                  </div>
                </div>{/* /.cta-content */}
              </div>{/* /.tr-cta */}	
              <div className="row">
                <div className="col-md-6 col-lg-3">
                  <div className="job-item">
                    <div className="item-overlay">
                      <div className="job-info">
                        <a href="listing.html#" className="btn btn-primary">Full Time</a>
                        <span className="tr-title">
                          <a href="job-details.html">Project Manager</a>
                          <span><a href="listing.html#">Dig File</a></span>
                        </span>
                        <ul className="tr-list job-meta">
                          <li><i className="fa fa-map-signs" aria-hidden="true" />San Francisco, CA, US</li>
                          <li><i className="fa fa-briefcase" aria-hidden="true" />Mid Level</li>
                          <li><i className="fa fa-money" aria-hidden="true" />$5,000 - $6,000</li>
                        </ul>
                        <ul className="job-social tr-list">
                          <li><a href="listing.html#"><i className="fa fa-heart-o" aria-hidden="true" /></a></li>
                          <li><a href="listing.html#"><i className="fa fa-expand" aria-hidden="true" /></a></li>
                          <li><a href="listing.html#"><i className="fa fa-bookmark-o" aria-hidden="true" /></a></li>
                          <li><a href="job-details.html"><i className="fa fa-long-arrow-right" aria-hidden="true" /></a></li>
                        </ul>
                      </div>										
                    </div>
                    <div className="job-info">
                      <div className="company-logo">
                        <img src="images/job/1.png" alt="images" className="img-fluid" />
                      </div>
                      <span className="tr-title">
                        <a href="listing.html#">Project Manager</a>
                        <span><a href="listing.html#">Dig File</a></span>
                      </span>
                      <ul className="tr-list job-meta">
                        <li><span><i className="fa fa-map-signs" aria-hidden="true" /></span>San Francisco, CA, US</li>
                        <li><span><i className="fa fa-briefcase" aria-hidden="true" /></span>Mid Level</li>
                        <li><span><i className="fa fa-money" aria-hidden="true" /></span>$5,000 - $6,000</li>
                      </ul>
                      <div className="time">
                        <a href="listing.html#"><span>Full Time</span></a>
                        <span className="pull-right">Posted 23 hours ago</span>
                      </div>																				
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="job-item">
                    <div className="item-overlay">
                      <div className="job-info">
                        <a href="listing.html#" className="btn btn-primary">Part Time</a>
                        <span className="tr-title">
                          <a href="job-details.html">Design Associate</a>
                          <span><a href="listing.html#">Loop</a></span>
                        </span>
                        <ul className="tr-list job-meta">
                          <li><i className="fa fa-map-signs" aria-hidden="true" />San Francisco, CA, US</li>
                          <li><i className="fa fa-briefcase" aria-hidden="true" />Mid Level</li>
                          <li><i className="fa fa-money" aria-hidden="true" />$5,000 - $6,000</li>
                        </ul>
                        <ul className="job-social tr-list">
                          <li><a href="listing.html#"><i className="fa fa-heart-o" aria-hidden="true" /></a></li>
                          <li><a href="listing.html#"><i className="fa fa-expand" aria-hidden="true" /></a></li>
                          <li><a href="listing.html#"><i className="fa fa-bookmark-o" aria-hidden="true" /></a></li>
                          <li><a href="job-details.html"><i className="fa fa-long-arrow-right" aria-hidden="true" /></a></li>
                        </ul>
                      </div>										
                    </div>								
                    <div className="job-info">
                      <div className="company-logo">
                        <img src="images/job/2.png" alt="images" className="img-fluid" />
                      </div>
                      <span className="tr-title">
                        <a href="listing.html#">Design Associate</a>
                        <span><a href="listing.html#">Loop</a></span>
                      </span>
                      <ul className="tr-list job-meta">
                        <li><span><i className="fa fa-map-signs" aria-hidden="true" /></span>San Francisco, CA, US</li>
                        <li><span><i className="fa fa-briefcase" aria-hidden="true" /></span>Mid Level</li>
                        <li><span><i className="fa fa-money" aria-hidden="true" /></span>$5,000 - $6,000</li>
                      </ul>
                      <div className="time">
                        <a href="listing.html#"><span className="part-time">Part Time</span></a>
                        <span className="pull-right">Posted 1 day ago</span>
                      </div>			
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="job-item">
                    <div className="item-overlay">
                      <div className="job-info">
                        <a href="listing.html#" className="btn btn-primary">Freelance</a>
                        <span className="tr-title">
                          <a href="job-details.html">Graphic Designer</a>
                          <span><a href="listing.html#">Humanity Creative</a></span>
                        </span>
                        <ul className="tr-list job-meta">
                          <li><i className="fa fa-map-signs" aria-hidden="true" />San Francisco, CA, US</li>
                          <li><i className="fa fa-briefcase" aria-hidden="true" />Mid Level</li>
                          <li><i className="fa fa-money" aria-hidden="true" />$5,000 - $6,000</li>
                        </ul>
                        <ul className="job-social tr-list">
                          <li><a href="listing.html#"><i className="fa fa-heart-o" aria-hidden="true" /></a></li>
                          <li><a href="listing.html#"><i className="fa fa-expand" aria-hidden="true" /></a></li>
                          <li><a href="listing.html#"><i className="fa fa-bookmark-o" aria-hidden="true" /></a></li>
                          <li><a href="job-details.html"><i className="fa fa-long-arrow-right" aria-hidden="true" /></a></li>
                        </ul>
                      </div>										
                    </div>								
                    <div className="job-info">
                      <div className="company-logo">
                        <img src="images/job/3.png" alt="images" className="img-fluid" />
                      </div>
                      <span className="tr-title">
                        <a href="listing.html#">Graphic Designer</a>
                        <span><a href="listing.html#">Humanity Creative</a></span>
                      </span>
                      <ul className="tr-list job-meta">
                        <li><span><i className="fa fa-map-signs" aria-hidden="true" /></span>San Francisco, CA, US</li>
                        <li><span><i className="fa fa-briefcase" aria-hidden="true" /></span>Mid Level</li>
                        <li><span><i className="fa fa-money" aria-hidden="true" /></span>$5,000 - $6,000</li>
                      </ul>
                      <div className="time">
                        <a href="listing.html#"><span className="freelance">Freelance</span></a>
                        <span className="pull-right">Posted 10 day ago</span>
                      </div>			
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="job-item">
                    <div className="item-overlay">
                      <div className="job-info">
                        <a href="listing.html#" className="btn btn-primary">Full Time</a>
                        <span className="tr-title">
                          <a href="job-details.html">Design Consultant</a>
                          <span><a href="listing.html#">Families</a></span>
                        </span>
                        <ul className="tr-list job-meta">
                          <li><i className="fa fa-map-signs" aria-hidden="true" />San Francisco, CA, US</li>
                          <li><i className="fa fa-briefcase" aria-hidden="true" />Mid Level</li>
                          <li><i className="fa fa-money" aria-hidden="true" />$5,000 - $6,000</li>
                        </ul>
                        <ul className="job-social tr-list">
                          <li><a href="listing.html#"><i className="fa fa-heart-o" aria-hidden="true" /></a></li>
                          <li><a href="listing.html#"><i className="fa fa-expand" aria-hidden="true" /></a></li>
                          <li><a href="listing.html#"><i className="fa fa-bookmark-o" aria-hidden="true" /></a></li>
                          <li><a href="job-details.html"><i className="fa fa-long-arrow-right" aria-hidden="true" /></a></li>
                        </ul>
                      </div>										
                    </div>								
                    <div className="job-info">
                      <div className="company-logo">
                        <img src="images/job/4.png" alt="images" className="img-fluid" />
                      </div>
                      <span className="tr-title">
                        <a href="listing.html#">Design Consultant</a>
                        <span><a href="listing.html#">Families</a></span>
                      </span>
                      <ul className="tr-list job-meta">
                        <li><span><i className="fa fa-map-signs" aria-hidden="true" /></span>San Francisco, CA, US</li>
                        <li><span><i className="fa fa-briefcase" aria-hidden="true" /></span>Mid Level</li>
                        <li><span><i className="fa fa-money" aria-hidden="true" /></span>$5,000 - $6,000</li>
                      </ul>
                      <div className="time">
                        <a href="listing.html#"><span>Full Time</span></a>
                        <span className="pull-right">Posted Oct 09, 2017</span>
                      </div>				
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="job-item">
                    <div className="item-overlay">
                      <div className="job-info">
                        <a href="listing.html#" className="btn btn-primary">Part Time</a>
                        <span className="tr-title">
                          <a href="job-details.html">Project Manager</a>
                          <span><a href="listing.html#">Sky Creative</a></span>
                        </span>
                        <ul className="tr-list job-meta">
                          <li><i className="fa fa-map-signs" aria-hidden="true" />San Francisco, CA, US</li>
                          <li><i className="fa fa-briefcase" aria-hidden="true" />Mid Level</li>
                          <li><i className="fa fa-money" aria-hidden="true" />$5,000 - $6,000</li>
                        </ul>
                        <ul className="job-social tr-list">
                          <li><a href="listing.html#"><i className="fa fa-heart-o" aria-hidden="true" /></a></li>
                          <li><a href="listing.html#"><i className="fa fa-expand" aria-hidden="true" /></a></li>
                          <li><a href="listing.html#"><i className="fa fa-bookmark-o" aria-hidden="true" /></a></li>
                          <li><a href="job-details.html"><i className="fa fa-long-arrow-right" aria-hidden="true" /></a></li>
                        </ul>
                      </div>										
                    </div>								
                    <div className="job-info">
                      <div className="company-logo">
                        <img src="images/job/5.png" alt="images" className="img-fluid" />
                      </div>
                      <span className="tr-title">
                        <a href="listing.html#">Project Manager</a>
                        <span><a href="listing.html#">Sky Creative</a></span>
                      </span>
                      <ul className="tr-list job-meta">
                        <li><span><i className="fa fa-map-signs" aria-hidden="true" /></span>San Francisco, CA, US</li>
                        <li><span><i className="fa fa-briefcase" aria-hidden="true" /></span>Mid Level</li>
                        <li><span><i className="fa fa-money" aria-hidden="true" /></span>$5,000 - $6,000</li>
                      </ul>	
                      <div className="time">
                        <a href="listing.html#"><span className="part-time">Part Time</span></a>
                        <span className="pull-right">Posted 1 day ago</span>
                      </div>			
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="job-item">
                    <div className="item-overlay">
                      <div className="job-info">
                        <a href="listing.html#" className="btn btn-primary">Freelance</a>
                        <span className="tr-title">
                          <a href="job-details.html">Design Associate</a>
                          <span><a href="listing.html#">Pencil</a></span>
                        </span>
                        <ul className="tr-list job-meta">
                          <li><i className="fa fa-map-signs" aria-hidden="true" />San Francisco, CA, US</li>
                          <li><i className="fa fa-briefcase" aria-hidden="true" />Mid Level</li>
                          <li><i className="fa fa-money" aria-hidden="true" />$5,000 - $6,000</li>
                        </ul>
                        <ul className="job-social tr-list">
                          <li><a href="listing.html#"><i className="fa fa-heart-o" aria-hidden="true" /></a></li>
                          <li><a href="listing.html#"><i className="fa fa-expand" aria-hidden="true" /></a></li>
                          <li><a href="listing.html#"><i className="fa fa-bookmark-o" aria-hidden="true" /></a></li>
                          <li><a href="job-details.html"><i className="fa fa-long-arrow-right" aria-hidden="true" /></a></li>
                        </ul>
                      </div>										
                    </div>								
                    <div className="job-info">
                      <div className="company-logo">
                        <img src="images/job/6.png" alt="images" className="img-fluid" />
                      </div>
                      <span className="tr-title">
                        <a href="listing.html#">Design Associate</a>
                        <span><a href="listing.html#">Pencil</a></span>
                      </span>
                      <ul className="tr-list job-meta">
                        <li><span><i className="fa fa-map-signs" aria-hidden="true" /></span>San Francisco, CA, US</li>
                        <li><span><i className="fa fa-briefcase" aria-hidden="true" /></span>Mid Level</li>
                        <li><span><i className="fa fa-money" aria-hidden="true" /></span>$5,000 - $6,000</li>
                      </ul>
                      <div className="time">
                        <a href="listing.html#"><span className="freelance">Freelance</span></a>
                        <span className="pull-right">Posted 23 hours ago</span>
                      </div>				
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="job-item">
                    <div className="item-overlay">
                      <div className="job-info">
                        <a href="listing.html#" className="btn btn-primary">Full Time</a>
                        <span className="tr-title">
                          <a href="job-details.html">Graphic Designer</a>
                          <span><a href="listing.html#">Fox</a></span>
                        </span>
                        <ul className="tr-list job-meta">
                          <li><i className="fa fa-map-signs" aria-hidden="true" />San Francisco, CA, US</li>
                          <li><i className="fa fa-briefcase" aria-hidden="true" />Mid Level</li>
                          <li><i className="fa fa-money" aria-hidden="true" />$5,000 - $6,000</li>
                        </ul>
                        <ul className="job-social tr-list">
                          <li><a href="listing.html#"><i className="fa fa-heart-o" aria-hidden="true" /></a></li>
                          <li><a href="listing.html#"><i className="fa fa-expand" aria-hidden="true" /></a></li>
                          <li><a href="listing.html#"><i className="fa fa-bookmark-o" aria-hidden="true" /></a></li>
                          <li><a href="job-details.html"><i className="fa fa-long-arrow-right" aria-hidden="true" /></a></li>
                        </ul>
                      </div>										
                    </div>								
                    <div className="job-info">
                      <div className="company-logo">
                        <img src="images/job/7.png" alt="images" className="img-fluid" />
                      </div>
                      <span className="tr-title">
                        <a href="listing.html#">Graphic Designer</a>
                        <span><a href="listing.html#">Fox</a></span>
                      </span>
                      <ul className="tr-list job-meta">
                        <li><span><i className="fa fa-map-signs" aria-hidden="true" /></span>San Francisco, CA, US</li>
                        <li><span><i className="fa fa-briefcase" aria-hidden="true" /></span>Mid Level</li>
                        <li><span><i className="fa fa-money" aria-hidden="true" /></span>$5,000 - $6,000</li>
                      </ul>
                      <div className="time">
                        <a href="listing.html#"><span>Full Time</span></a>
                        <span className="pull-right">Posted Oct 09, 2017</span>
                      </div>				
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="job-item">
                    <div className="item-overlay">
                      <div className="job-info">
                        <a href="listing.html#"><span className="btn btn-primary">Part Time</span></a>
                        <span className="tr-title">
                          <a href="job-details.html">Design Consultant</a>
                          <span><a href="listing.html#">Owl</a></span>
                        </span>
                        <ul className="tr-list job-meta">
                          <li><i className="fa fa-map-signs" aria-hidden="true" />San Francisco, CA, US</li>
                          <li><i className="fa fa-briefcase" aria-hidden="true" />Mid Level</li>
                          <li><i className="fa fa-money" aria-hidden="true" />$5,000 - $6,000</li>
                        </ul>
                        <ul className="job-social tr-list">
                          <li><a href="listing.html#"><i className="fa fa-heart-o" aria-hidden="true" /></a></li>
                          <li><a href="listing.html#"><i className="fa fa-expand" aria-hidden="true" /></a></li>
                          <li><a href="listing.html#"><i className="fa fa-bookmark-o" aria-hidden="true" /></a></li>
                          <li><a href="job-details.html"><i className="fa fa-long-arrow-right" aria-hidden="true" /></a></li>
                        </ul>
                      </div>										
                    </div>								
                    <div className="job-info">
                      <div className="company-logo">
                        <img src="images/job/8.png" alt="images" className="img-fluid" />
                      </div>
                      <span className="tr-title">
                        <a href="listing.html#">Design Consultant</a>
                        <span><a href="listing.html#">Owl</a></span>
                      </span>
                      <ul className="tr-list job-meta">
                        <li><span><i className="fa fa-map-signs" aria-hidden="true" /></span>San Francisco, CA, US</li>
                        <li><span><i className="fa fa-briefcase" aria-hidden="true" /></span>Mid Level</li>
                        <li><span><i className="fa fa-money" aria-hidden="true" /></span>$5,000 - $6,000</li>
                      </ul>
                      <div className="time">
                        <a href="listing.html#"><span className="part-time">Part Time</span></a>
                        <span className="pull-right">Posted 10 day ago</span>
                      </div>			
                    </div>
                  </div>
                </div>
              </div>{/* /.row */}										
            </div>{/* /.tab-pane */}
            <div role="tabpanel" className="tab-pane fade two-column" id="two-column">
              <div className="row">
                <div className="col-sm-6">
                  <div className="job-item">
                    <div className="job-info">
                      <div className="clearfix">
                        <div className="company-logo">
                          <img src="images/job/1.png" alt="images" className="img-fluid" />
                        </div>
                        <span className="tr-title">
                          <a href="job-details.html">Design Associate</a><span><a href="listing.html#">Loop</a></span>
                        </span>
                        <span><a href="listing.html#" className="btn btn-primary">Part Time</a></span>
                      </div>
                      <ul className="tr-list job-meta">
                        <li><span><i className="fa fa-map-signs" aria-hidden="true" /></span>San Francisco, CA, US</li>
                        <li><span><i className="fa fa-briefcase" aria-hidden="true" /></span>Mid Level</li>
                        <li><span><i className="fa fa-money" aria-hidden="true" /></span>$5,000 - $6,000</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="job-item">
                    <div className="job-info">
                      <div className="clearfix">
                        <div className="company-logo">
                          <img src="images/job/2.png" alt="images" className="img-fluid" />
                        </div>
                        <span className="tr-title">
                          <a href="job-details.html">Design Associate</a><span><a href="listing.html#">Loop</a></span>
                        </span>
                        <span><a href="listing.html#" className="btn btn-primary">Part Time</a></span>
                      </div>
                      <ul className="tr-list job-meta">
                        <li><span><i className="fa fa-map-signs" aria-hidden="true" /></span>San Francisco, CA, US</li>
                        <li><span><i className="fa fa-briefcase" aria-hidden="true" /></span>Mid Level</li>
                        <li><span><i className="fa fa-money" aria-hidden="true" /></span>$5,000 - $6,000</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="job-item">
                    <div className="job-info">
                      <div className="clearfix">
                        <div className="company-logo">
                          <img src="images/job/3.png" alt="images" className="img-fluid" />
                        </div>
                        <span className="tr-title">
                          <a href="job-details.html">Design Associate</a><span><a href="listing.html#">Loop</a></span>
                        </span>
                        <span><a href="listing.html#" className="btn btn-primary">Part Time</a></span>
                      </div>
                      <ul className="tr-list job-meta">
                        <li><span><i className="fa fa-map-signs" aria-hidden="true" /></span>San Francisco, CA, US</li>
                        <li><span><i className="fa fa-briefcase" aria-hidden="true" /></span>Mid Level</li>
                        <li><span><i className="fa fa-money" aria-hidden="true" /></span>$5,000 - $6,000</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="job-item">
                    <div className="job-info">
                      <div className="clearfix">
                        <div className="company-logo">
                          <img src="images/job/4.png" alt="images" className="img-fluid" />
                        </div>
                        <span className="tr-title">
                          <a href="job-details.html">Design Associate</a><span><a href="listing.html#">Loop</a></span>
                        </span>
                        <span><a href="listing.html#" className="btn btn-primary">Part Time</a></span>
                      </div>
                      <ul className="tr-list job-meta">
                        <li><span><i className="fa fa-map-signs" aria-hidden="true" /></span>San Francisco, CA, US</li>
                        <li><span><i className="fa fa-briefcase" aria-hidden="true" /></span>Mid Level</li>
                        <li><span><i className="fa fa-money" aria-hidden="true" /></span>$5,000 - $6,000</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="job-item">
                    <div className="job-info">
                      <div className="clearfix">
                        <div className="company-logo">
                          <img src="images/job/5.png" alt="images" className="img-fluid" />
                        </div>
                        <span className="tr-title">
                          <a href="job-details.html">Design Associate</a><span><a href="listing.html#">Loop</a></span>
                        </span>
                        <span><a href="listing.html#" className="btn btn-primary">Part Time</a></span>
                      </div>
                      <ul className="tr-list job-meta">
                        <li><span><i className="fa fa-map-signs" aria-hidden="true" /></span>San Francisco, CA, US</li>
                        <li><span><i className="fa fa-briefcase" aria-hidden="true" /></span>Mid Level</li>
                        <li><span><i className="fa fa-money" aria-hidden="true" /></span>$5,000 - $6,000</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="job-item">
                    <div className="job-info">
                      <div className="clearfix">
                        <div className="company-logo">
                          <img src="images/job/6.png" alt="images" className="img-fluid" />
                        </div>
                        <span className="tr-title">
                          <a href="job-details.html">Design Associate</a><span><a href="listing.html#">Loop</a></span>
                        </span>
                        <span><a href="listing.html#" className="btn btn-primary">Part Time</a></span>
                      </div>
                      <ul className="tr-list job-meta">
                        <li><span><i className="fa fa-map-signs" aria-hidden="true" /></span>San Francisco, CA, US</li>
                        <li><span><i className="fa fa-briefcase" aria-hidden="true" /></span>Mid Level</li>
                        <li><span><i className="fa fa-money" aria-hidden="true" /></span>$5,000 - $6,000</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="job-item">
                    <div className="job-info">
                      <div className="clearfix">
                        <div className="company-logo">
                          <img src="images/job/7.png" alt="images" className="img-fluid" />
                        </div>
                        <span className="tr-title">
                          <a href="job-details.html">Design Associate</a><span><a href="listing.html#">Loop</a></span>
                        </span>
                        <span><a href="listing.html#" className="btn btn-primary">Part Time</a></span>
                      </div>
                      <ul className="tr-list job-meta">
                        <li><span><i className="fa fa-map-signs" aria-hidden="true" /></span>San Francisco, CA, US</li>
                        <li><span><i className="fa fa-briefcase" aria-hidden="true" /></span>Mid Level</li>
                        <li><span><i className="fa fa-money" aria-hidden="true" /></span>$5,000 - $6,000</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="job-item">
                    <div className="job-info">
                      <div className="clearfix">
                        <div className="company-logo">
                          <img src="images/job/8.png" alt="images" className="img-fluid" />
                        </div>
                        <span className="tr-title">
                          <a href="job-details.html">Design Associate</a><span><a href="listing.html#">Loop</a></span>
                        </span>
                        <span><a href="listing.html#" className="btn btn-primary">Part Time</a></span>
                      </div>
                      <ul className="tr-list job-meta">
                        <li><span><i className="fa fa-map-signs" aria-hidden="true" /></span>San Francisco, CA, US</li>
                        <li><span><i className="fa fa-briefcase" aria-hidden="true" /></span>Mid Level</li>
                        <li><span><i className="fa fa-money" aria-hidden="true" /></span>$5,000 - $6,000</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>{/* /.row */}
              <div className="tr-cta">
                <div className="cta-content section">
                  <div className="cta-info">
                    <div className="pull-left">
                      <h1>Add your resume and let your next job find you.</h1>
                    </div>
                    <a href="listing.html#" className="btn btn-primary pull-right">Add Your Resume</a>
                  </div>
                </div>{/* /.cta-content */}
              </div>{/* /.tr-cta */}
              <div className="row">
                <div className="col-sm-6">
                  <div className="job-item">
                    <div className="job-info">
                      <div className="clearfix">
                        <div className="company-logo">
                          <img src="images/job/1.png" alt="images" className="img-fluid" />
                        </div>
                        <span className="tr-title">
                          <a href="job-details.html">Design Associate</a><span><a href="listing.html#">Loop</a></span>
                        </span>
                        <span><a href="listing.html#" className="btn btn-primary">Part Time</a></span>
                      </div>
                      <ul className="tr-list job-meta">
                        <li><span><i className="fa fa-map-signs" aria-hidden="true" /></span>San Francisco, CA, US</li>
                        <li><span><i className="fa fa-briefcase" aria-hidden="true" /></span>Mid Level</li>
                        <li><span><i className="fa fa-money" aria-hidden="true" /></span>$5,000 - $6,000</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="job-item">
                    <div className="job-info">
                      <div className="clearfix">
                        <div className="company-logo">
                          <img src="images/job/2.png" alt="images" className="img-fluid" />
                        </div>
                        <span className="tr-title">
                          <a href="job-details.html">Design Associate</a><span><a href="listing.html#">Loop</a></span>
                        </span>
                        <span><a href="listing.html#" className="btn btn-primary">Part Time</a></span>
                      </div>
                      <ul className="tr-list job-meta">
                        <li><span><i className="fa fa-map-signs" aria-hidden="true" /></span>San Francisco, CA, US</li>
                        <li><span><i className="fa fa-briefcase" aria-hidden="true" /></span>Mid Level</li>
                        <li><span><i className="fa fa-money" aria-hidden="true" /></span>$5,000 - $6,000</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="job-item">
                    <div className="job-info">
                      <div className="clearfix">
                        <div className="company-logo">
                          <img src="images/job/3.png" alt="images" className="img-fluid" />
                        </div>
                        <span className="tr-title">
                          <a href="job-details.html">Design Associate</a><span><a href="listing.html#">Loop</a></span>
                        </span>
                        <span><a href="listing.html#" className="btn btn-primary">Part Time</a></span>
                      </div>
                      <ul className="tr-list job-meta">
                        <li><span><i className="fa fa-map-signs" aria-hidden="true" /></span>San Francisco, CA, US</li>
                        <li><span><i className="fa fa-briefcase" aria-hidden="true" /></span>Mid Level</li>
                        <li><span><i className="fa fa-money" aria-hidden="true" /></span>$5,000 - $6,000</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="job-item">
                    <div className="job-info">
                      <div className="clearfix">
                        <div className="company-logo">
                          <img src="images/job/4.png" alt="images" className="img-fluid" />
                        </div>
                        <span className="tr-title">
                          <a href="job-details.html">Design Associate</a><span><a href="listing.html#">Loop</a></span>
                        </span>
                        <span><a href="listing.html#" className="btn btn-primary">Part Time</a></span>
                      </div>
                      <ul className="tr-list job-meta">
                        <li><span><i className="fa fa-map-signs" aria-hidden="true" /></span>San Francisco, CA, US</li>
                        <li><span><i className="fa fa-briefcase" aria-hidden="true" /></span>Mid Level</li>
                        <li><span><i className="fa fa-money" aria-hidden="true" /></span>$5,000 - $6,000</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="job-item">
                    <div className="job-info">
                      <div className="clearfix">
                        <div className="company-logo">
                          <img src="images/job/5.png" alt="images" className="img-fluid" />
                        </div>
                        <span className="tr-title">
                          <a href="job-details.html">Design Associate</a><span><a href="listing.html#">Loop</a></span>
                        </span>
                        <span><a href="listing.html#" className="btn btn-primary">Part Time</a></span>
                      </div>
                      <ul className="tr-list job-meta">
                        <li><span><i className="fa fa-map-signs" aria-hidden="true" /></span>San Francisco, CA, US</li>
                        <li><span><i className="fa fa-briefcase" aria-hidden="true" /></span>Mid Level</li>
                        <li><span><i className="fa fa-money" aria-hidden="true" /></span>$5,000 - $6,000</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="job-item">
                    <div className="job-info">
                      <div className="clearfix">
                        <div className="company-logo">
                          <img src="images/job/6.png" alt="images" className="img-fluid" />
                        </div>
                        <span className="tr-title">
                          <a href="job-details.html">Design Associate</a><span><a href="listing.html#">Loop</a></span>
                        </span>
                        <span><a href="listing.html#" className="btn btn-primary">Part Time</a></span>
                      </div>
                      <ul className="tr-list job-meta">
                        <li><span><i className="fa fa-map-signs" aria-hidden="true" /></span>San Francisco, CA, US</li>
                        <li><span><i className="fa fa-briefcase" aria-hidden="true" /></span>Mid Level</li>
                        <li><span><i className="fa fa-money" aria-hidden="true" /></span>$5,000 - $6,000</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="job-item">
                    <div className="job-info">
                      <div className="clearfix">
                        <div className="company-logo">
                          <img src="images/job/7.png" alt="images" className="img-fluid" />
                        </div>
                        <span className="tr-title">
                          <a href="job-details.html">Design Associate</a><span><a href="listing.html#">Loop</a></span>
                        </span>
                        <span><a href="listing.html#" className="btn btn-primary">Part Time</a></span>
                      </div>
                      <ul className="tr-list job-meta">
                        <li><span><i className="fa fa-map-signs" aria-hidden="true" /></span>San Francisco, CA, US</li>
                        <li><span><i className="fa fa-briefcase" aria-hidden="true" /></span>Mid Level</li>
                        <li><span><i className="fa fa-money" aria-hidden="true" /></span>$5,000 - $6,000</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="job-item">
                    <div className="job-info">
                      <div className="clearfix">
                        <div className="company-logo">
                          <img src="images/job/8.png" alt="images" className="img-fluid" />
                        </div>
                        <span className="tr-title">
                          <a href="job-details.html">Design Associate</a><span><a href="listing.html#">Loop</a></span>
                        </span>
                        <span><a href="listing.html#" className="btn btn-primary">Part Time</a></span>
                      </div>
                      <ul className="tr-list job-meta">
                        <li><span><i className="fa fa-map-signs" aria-hidden="true" /></span>San Francisco, CA, US</li>
                        <li><span><i className="fa fa-briefcase" aria-hidden="true" /></span>Mid Level</li>
                        <li><span><i className="fa fa-money" aria-hidden="true" /></span>$5,000 - $6,000</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>{/* /.row */}										
            </div>{/* /.tab-pane */}
          </div>{/* /.tab-content */}		
        </div>{/* /.container */}		
      </div>
      
    )
  }
}
