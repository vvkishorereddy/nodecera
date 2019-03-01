import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import CompanyProfile from "./CompanyProfile";
import AccountInfo from "./AccountInfo";
import Activejobs from "./Activejobs";
import ArchivedJobs from "./ArchivedJobs";
import withContext from "../../hoc/ContextConsumer";
import BulkUpload from "./BulkUpload";
import AlertInfoComponent from "../AlertInfoComponent";

class Profile extends Component {
  render() {
    return (
      <Fragment>
        {!this.props.context.isCompanyProfileFilled && (
          <AlertInfoComponent
            type="warning"
            message="Please complete Profile to publish Jobs"
          />
        )}

        <div className="tr-profile section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-lg-3">
                <div className="tr-sidebar">
                  <ul
                    className="nav nav-tabs profile-tabs section"
                    role="tablist"
                  >
                    <li
                      role="presentation"
                      onClick={e => openTab(e, "profile")}
                      data-id="account-info"
                      className="tabTitle"
                      style={{ cursor: "pointer" }}
                    >
                      <a className="active">
                        <i className="fa fa-life-ring" aria-hidden="true" />{" "}
                        Account Info
                      </a>
                    </li>
                    <li
                      role="presentation"
                      onClick={e => openTab(e, "profile")}
                      data-id="company-profile"
                      className="tabTitle"
                      style={{ cursor: "pointer" }}
                    >
                      <a>
                        <span>
                          <i className="fa fa-user-o" aria-hidden="true" />
                        </span>
                        Company Profile
                      </a>
                    </li>
                    <li
                      role="presentation"
                      onClick={e => openTab(e, "profile")}
                      data-id="bulk-upload"
                      className="tabTitle"
                      style={{ cursor: "pointer" }}
                    >
                      <a>
                        <span>
                          <i className="fa fa-clone" aria-hidden="true" />
                        </span>
                        Bulk upload
                      </a>
                    </li>
                    <li
                      role="presentation"
                      onClick={e => {
                        openTab(e, "profile");
                        this.props.context.fetchUserActiveJobs();
                      }}
                      data-id="open-role"
                      className="tabTitle"
                      style={{ cursor: "pointer" }}
                    >
                      <a>
                        <span>
                          <i className="fa fa-bell-o" aria-hidden="true" />
                        </span>
                        Open Jobs
                      </a>
                    </li>
                    <li
                      role="presentation"
                      onClick={e => {
                        openTab(e, "profile");
                        this.props.context.fetchUserArchivedJobs();
                      }}
                      data-id="archived"
                      className="tabTitle"
                      style={{ cursor: "pointer" }}
                    >
                      <a>
                        <span>
                          <i className="fa fa-clone" aria-hidden="true" />
                        </span>
                        Archived Job Post
                      </a>
                    </li>
                    <li role="presentation" style={{ cursor: "pointer" }}>
                      <Link to="/logout">
                        <span>
                          <i className="fa fa-scissors" aria-hidden="true" />
                        </span>
                        Logout
                      </Link>
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
                    <AccountInfo />
                  </div>

                  <div
                    role="tabpanel"
                    className="tab-pane section"
                    id="company-profile"
                  >
                    <CompanyProfile />
                  </div>
                  <div
                    role="tabpanel"
                    className="tab-pane open-role"
                    id="bulk-upload"
                  >
                    <BulkUpload />
                  </div>
                  <div
                    role="tabpanel"
                    className="tab-pane open-role"
                    id="open-role"
                  >
                    <Activejobs />
                  </div>
                  <div
                    role="tabpanel"
                    className="tab-pane archived-job"
                    id="archived"
                  >
                    <ArchivedJobs />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withContext(Profile);
