import React, { Component } from "react";
import SimilarJobs from "./SimilarJobs";
import AddResume from "../AddResume";

const singleJobData = {
  id: 1,
  title: "Project Manager",
  workType: "Full Time",
  location: "San Francisco, CA, US",
  category: "",
  salary: "$5,000 - $6,000",
  summary:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco  laboris nisi ut aliquip ex ea commodo consequat. Duis aute  irure dolor in reprehenderit in voluptate velit esse cillum  dolore eu fugiat nulla pariatur. Excepteur sint occaecat  cupidatat non proident, sunt in culpa qui officia deserunt  mollit anim id est laborum.",
  responsibilities:
    "Execute all visual design stages of website design from  concept to final hand-off to development Create print  advertisements, social media advertisements, client collateral  &amp; digital resizes according to Client demands With  direction of the Creative team, input into new design ideas  for client branding Update &amp; keep all agency collateral  materials, including keeping records of Client's logos, fonts,  images, etc.",
  requirements: `<ul className="tr-list">  <li>Bachelor's Degree</li>  <li>    2-5 years of relevant experience ( or equivalent educational
    experience)  </li>  <li>    Experience developing in Wordpress and other web design    platforms  </li>
  <li>HTML, CSS and JavaScript experience a plus</li>  <li>    In depth knowledge &amp; technical experience of Photoshop,
    Illustrator, InDesign, Adobe PDF, Keynote, PowerPoint,    Microsoft Word &amp; Excel  </li>  <li>
    Exceptional eye for design, deep understanding of creativity    and ability to recognize fresh approaches to Advertising  </li>  <li>
    Must be fluent in Spanish; working written and spoken    proficiency  </li>  <li>    **All applicants must be eligible to work in the U.S.
    without sponsorship  </li></ul><script>alert(0)</script>`,
  experience: "Mid Level",
  company_name: "Dig File",
  company_logo: "images/job/8.png",
  company_description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore",
  company_address: "London, UK",
  company_phone: "+1234 567 8910",
  company_email: "admin@company.com",
  company_website: "www.company.com",
  last_date: "",
  created_at: "Posted 23 hours ago"
};

export default class JobData extends Component {
  state = {
    singleJobData: {}
  };

  componentDidMount() {
    this.setState({
      ...this.state,
      singleJobData: singleJobData
    });
  }

  render() {
    const { singleJobData } = this.state;

    return (
      <div className="job-details section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-9">
              <div className="job-summary section">
                <span className="tr-title">Job Summary</span>
                <p>{singleJobData.summary}</p>
                <span>Key Responsibilities:</span>
                <p>{singleJobData.responsibilities}</p>
                <span>Minimum Requirements</span>
                <div
                  dangerouslySetInnerHTML={{
                    __html: singleJobData.requirements
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
                          {singleJobData.created_at}
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
                          {singleJobData.experience}
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
                    <span>{singleJobData.company_name}</span>
                    <p>{singleJobData.company_description}</p>
                    <ul className="tr-list">
                      <li>
                        <span>Address:</span> {singleJobData.company_address}
                      </li>
                      <li>
                        <span>Compnay SIze:</span> 2k Employee
                      </li>
                      <li>
                        <span>Industry:</span>{" "}
                        <a href="job-details.html#">Technology</a>
                      </li>
                      <li>
                        <span>Phone:</span> {singleJobData.company_phone}
                      </li>
                      <li>
                        <span>Email:</span>{" "}
                        <a href="job-details.html#">
                          {singleJobData.company_email}
                        </a>
                      </li>
                      <li>
                        <span>Website:</span>{" "}
                        <a href="job-details.html#">
                          {singleJobData.company_website}
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
