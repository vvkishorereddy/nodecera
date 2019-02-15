import React, { Component } from "react";

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
  last_date: "Jun 27, 2019",
  created_at: "Posted 23 hours ago"
};

export default class TopBanner extends Component {
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
              <h1>
                {singleJobData.title} @ {singleJobData.company_name}
              </h1>
            </div>
            <ul className="tr-list job-meta list-inline">
              <li>
                <i className="fa fa-map-signs" aria-hidden="true" />
                {singleJobData.location}
              </li>
              <li>
                <i className="fa fa-map-marker" aria-hidden="true" />
                {singleJobData.workType}
              </li>
              <li>
                <i className="fa fa-money" aria-hidden="true" />
                {singleJobData.salary}
              </li>
              <li>
                <i className="fa fa-tags" aria-hidden="true" />
                HR/Org. Development
              </li>
              <li>
                <i className="fa fa-hourglass-start" aria-hidden="true" />
                Application Deadline : {singleJobData.last_date}
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
                Share
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
