import React, { Component } from "react";
import withContext from "../../hoc/ContextConsumer";

class TopBanner extends Component {
  render() {
    const {
      company_name,
      company_location,
      company_phone,
      company_email,
      company_website,
      company_logo,
      socialLinks
    } = this.props.context.companyInfo;

    return (
      <div className="tr-breadcrumb bg-image section-before">
        <div className="container">
          <div className="breadcrumb-info text-center">
            <div className="breadcrumb-logo">
              <img src={company_logo} alt="Logo" className="img-fluid" />
            </div>
            <div className="page-title">
              <h1>{company_name}</h1>
            </div>
            <ul className="job-meta tr-list list-inline">
              <li>
                <i className="fa fa-map-marker" aria-hidden="true" />
                {company_location}
              </li>
              <li>
                <i className="fa fa-phone" aria-hidden="true" />
                {company_phone}
              </li>
              <li>
                <i className="fa fa-envelope" aria-hidden="true" />
                {company_email}
              </li>
              <li>
                <i className="fa fa-briefcase" aria-hidden="true" />
                IT Industry
              </li>
            </ul>
            <ul className="breadcrumb-social social-icon-bg  tr-list">
              <li>
                <a href={socialLinks.facebook} target="_blank">
                  <i className="fa fa-facebook" />
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a href={socialLinks.twitter} target="_blank">
                  <i className="fa fa-twitter" /> <span>Twitter</span>{" "}
                </a>
              </li>
              <li>
                <a href={socialLinks.instagram} target="_blank">
                  <i className="fa fa-instagram" /> <span>Instagram</span>{" "}
                </a>
              </li>
              <li>
                <a href={socialLinks.linkedin} target="_blank">
                  <i className="fa fa-linkedin" />
                  <span>Linkedin</span>{" "}
                </a>
              </li>
              <li>
                <a
                  href={`http://${company_website.replace("http://", "")}`}
                  target="_blank"
                >
                  <i className="fa fa-globe" /> <span>Website</span>
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

export default withContext(TopBanner);
