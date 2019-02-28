import React, { Component } from "react";
import TwoColumn from "./TwoColumn";
import FourColumn from "./FourColumn";
import withContext from "../../hoc/ContextConsumer";
import Loader from "../Loader";

class JobsList extends Component {
  render() {
    return (
      <div className="jobs-listing section-padding">
        <div className="container">
          {/** 
          <div className="job-topbar">
            <span className="pull-left">Filter jobs by</span>
            <ul className="nav nav-tabs job-tabs" role="tablist">
              <li>235 Total jobs</li>
              <li
                role="presentation"
                onClick={e => openTab(e, "jobs")}
                className="tabTitle active"
                data-id="four-colum"
              >
                <a>
                  <i className="fa fa-th" aria-hidden="true" />
                </a>
              </li>
              <li
                role="presentation"
                onClick={e => openTab(e, "jobs")}
                className="tabTitle "
                data-id="two-column"
              >
                <a>
                  <i className="fa fa-th-list" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>

          

          <div className="list-menu text-center clearfix">
            <ul className="tr-list">
              <li className="dropdown tr-change-dropdown">
                Category:
                <a
                  data-toggle="dropdown"
                  href="listing.html#"
                  aria-expanded="false"
                >
                  <span className="change-text">Designer</span>
                  <i className="fa fa-angle-down" />
                </a>
                <ul className="dropdown-menu tr-change">
                  <li>
                    <a href="listing.html#">Designer</a>
                  </li>
                  <li>
                    <a href="listing.html#">Marketing</a>
                  </li>
                  <li>
                    <a href="listing.html#">Developement</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown tr-change-dropdown">
                <div className="form-group">
                  <select
                    name="experience"
                    ref={ele => (this.experience = ele)}
                    className="form-control"
                    onChange={e =>
                      this.props.context.filterJobs(
                        "experienceFilter",
                        this.experience.value
                      )
                    }
                  >
                    <option value="">Select Experience level</option>
                    <option value="entry-level">Entry Level</option>
                    <option value="mid-level">Mid Level</option>
                    <option value="mid-senior">Mid-Senior Level</option>
                    <option value="top-level">Top Level</option>
                  </select>
                </div>
              </li>
              <li className="dropdown tr-change-dropdown">
                Org Type:
                <a
                  data-toggle="dropdown"
                  href="listing.html#"
                  aria-expanded="false"
                >
                  <span className="change-text">Private</span>
                  <i className="fa fa-angle-down" />
                </a>
                <ul className="dropdown-menu tr-change">
                  <li>
                    <a href="listing.html#">Private</a>
                  </li>
                  <li>
                    <a href="listing.html#">public</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown tr-change-dropdown">
                Location:
                <a
                  data-toggle="dropdown"
                  href="listing.html#"
                  aria-expanded="false"
                >
                  <span className="change-text">USA</span>
                  <i className="fa fa-angle-down" />
                </a>
                <ul className="dropdown-menu tr-change">
                  <li>
                    <a href="listing.html#">USA</a>
                  </li>
                  <li>
                    <a href="listing.html#">London</a>
                  </li>
                  <li>
                    <a href="listing.html#">New York</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown tr-change-dropdown">
                Salary:
                <a
                  data-toggle="dropdown"
                  href="listing.html#"
                  aria-expanded="false"
                >
                  <span className="change-text">0 - 50K</span>
                  <i className="fa fa-angle-down" />
                </a>
                <ul className="dropdown-menu tr-change">
                  <li>
                    <a href="listing.html#">0 - 50K</a>
                  </li>
                  <li>
                    <a href="listing.html#">50k - 70K</a>
                  </li>
                  <li>
                    <a href="listing.html#">70k - 85K</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>


        */}

          <div className="tab-content tr-job-posted">
            <div
              role="tabpanel"
              className="tab-pane fade  show active"
              id="four-colum"
            >
              <FourColumn />
            </div>
            <div
              role="tabpanel"
              className="tab-pane fade two-column "
              id="two-column"
            >
              {/**   <TwoColumn /> */}
            </div>
          </div>
          {this.props.context.totalJobs.isLoading ? (
            <Loader />
          ) : (
            <div className="text-center">
              <button
                className="btn btn-primary"
                onClick={this.props.context.loadMoreFetchTotalJobs}
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default withContext(JobsList);
