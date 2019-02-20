import React, { Component } from "react";
import PopularJobs from "./PopularJobs";
import RecentJobs from "./RecentJobs";
import HotJobs from "./HotJobs";
import withContext from "../../hoc/ContextConsumer";

class HomeJobs extends Component {
  render() {
    return (
      <div className="tr-job-posted section-padding">
        <div className="container">
          <div className="section-title">
            <h1>Jobs you may be interested in</h1>
          </div>
          <div className="job-tab text-center">
            <ul className="nav nav-tabs justify-content-center">
              <li
                onClick={e => openTab(e, "jobs")}
                data-id="hotJobs"
                className="tabTitle active"
              >
                <a> Hot Jobs</a>
              </li>
              <li
                data-id="recentJobs"
                onClick={e => openTab(e, "jobs")}
                className="tabTitle"
              >
                <a>Recent Jobs</a>
              </li>
              <li
                data-id="popularJobs"
                onClick={e => openTab(e, "jobs")}
                className="tabTitle"
              >
                <a>Popular Jobs</a>
              </li>
            </ul>
            <div className="tab-content text-left">
              <div className=" tab-pane fade in show active" id="hotJobs">
                <HotJobs />
              </div>
              <div className=" tab-pane fade in" id="recentJobs">
                <RecentJobs />
              </div>
              <div className=" tab-pane fade in" id="popularJobs">
                <PopularJobs />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withContext(HomeJobs);
