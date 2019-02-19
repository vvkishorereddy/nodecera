import React, { Component } from "react";
import SimilarJobs from "./SimilarJobs";
import AddResume from "../AddResume";
import withContext from "../../hoc/ContextConsumer";

class JobData extends Component {
  render() {
    const { jobsDetails, isLoading } = this.props.context;

    return (
      <div className="job-details section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-9">
              <div className="job-summary section">
                <span className="tr-title">Job Summary</span>
                <p>{jobsDetails.summary}</p>
                <span>Key Responsibilities:</span>
                <p>{jobsDetails.responsibilities}</p>
                <span>Minimum Requirements</span>
                <div
                  dangerouslySetInnerHTML={{
                    __html: jobsDetails.requirements
                  }}
                />
              </div>
            </div>
            <div className="col-md-4 col-lg-3">
              <div className="tr-sidebar">
                <div className="widget-area">
                  <div className="widget short-info">
                    <h3 className="widget_title">Short Info</h3>
                    <ul className="tr-list">
                      <li className="media">
                        <div className="pull-left">
                          <i className="fa fa-calendar" aria-hidden="true" />
                        </div>
                        <div className="media-body">
                          <span>Published:</span>
                          {jobsDetails.created_at}
                        </div>
                      </li>
                      <li className="media">
                        <div className="pull-left">
                          <i className="fa fa-user-plus" aria-hidden="true" />
                        </div>
                        <div className="media-body">
                          <span>Job poster:</span>Lance Ladaga
                        </div>
                      </li>
                      <li className="media">
                        <div className="pull-left">
                          <i className="fa fa-industry" aria-hidden="true" />
                        </div>
                        <div className="media-body">
                          <span>Industry:</span>Marketing and Advertising
                        </div>
                      </li>
                      <li className="media">
                        <div className="pull-left">
                          <i className="fa fa-line-chart" aria-hidden="true" />
                        </div>
                        <div className="media-body">
                          <span>Experience:</span>
                          {jobsDetails.experience}
                        </div>
                      </li>
                      <li className="media">
                        <div className="pull-left">
                          <i className="fa fa-key" aria-hidden="true" />
                        </div>
                        <div className="media-body">
                          <span>Job function:</span>Advertising, Design,
                          Art/Creative
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* /.widger */}
                  <div className="widget cmpany-info">
                    <h3 className="widget_title">Cmpany Info</h3>
                    <span>{jobsDetails.company_name}</span>
                    <p>{jobsDetails.company_description}</p>
                    <ul className="tr-list">
                      <li>
                        <span>Address:</span> {jobsDetails.company_address}
                      </li>
                      <li>
                        <span>Compnay SIze:</span> 2k Employee
                      </li>
                      <li>
                        <span>Industry:</span>{" "}
                        <a href="job-details.html#">Technology</a>
                      </li>
                      <li>
                        <span>Phone:</span> {jobsDetails.company_phone}
                      </li>
                      <li>
                        <span>Email:</span>{" "}
                        <a href="job-details.html#">
                          {jobsDetails.company_email}
                        </a>
                      </li>
                      <li>
                        <span>Website:</span>{" "}
                        <a href="job-details.html#">
                          {jobsDetails.company_website}
                        </a>
                      </li>
                      <li>
                        <span />
                      </li>
                    </ul>
                    <div className="widget-social">
                      <ul className="tr-list">
                        <li>
                          <a href="job-details.html#">
                            <i
                              className="fa fa-facebook-square"
                              aria-hidden="true"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="job-details.html#">
                            <i
                              className="fa fa-twitter-square"
                              aria-hidden="true"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="job-details.html#">
                            <i
                              className="fa fa-google-plus-square"
                              aria-hidden="true"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="job-details.html#">
                            <i
                              className="fa fa-linkedin-square"
                              aria-hidden="true"
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* /.widger */}
                </div>
                {/* /.widget-area */}
              </div>
              {/* /.tr-sidebar */}
            </div>
          </div>
          {/* row */}

          <AddResume />
          <SimilarJobs />
        </div>
        {/* /.container */}
      </div>
    );
  }
}

export default withContext(JobData);
