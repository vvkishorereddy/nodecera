import React, { Component } from "react";
import PopularJobs from "./PopularJobs";
import RecentJobs from "./RecentJobs";
import HotJobs from "./HotJobs";
import withContext from "../../hoc/ContextConsumer";
import Loader from "../Loader";

class HomeJobs extends Component {
  componentDidMount() {
    this.props.context.fetchJobs();
  }

  openTab = e => {
    let liTag = document.querySelectorAll(".tabTitle");
    let dataDivTag = document.querySelectorAll(".tab-pane");
    liTag.forEach(element => {
      element.classList.remove("active");
    });
    dataDivTag.forEach(element => {
      element.classList.remove("active", "show");
    });
    document
      .querySelector(`[data-id=${e.currentTarget.dataset.id}]`)
      .classList.add("active");
    document
      .querySelector(`#${e.currentTarget.dataset.id}`)
      .classList.add("active", "show");
  };

  render() {
    const { isLoading } = this.props.context;
    return isLoading ? (
      <Loader />
    ) : (
      <div className="tr-job-posted section-padding">
        <div className="container">
          <div className="section-title">
            <h1>Jobs you may be interested in</h1>
          </div>
          <div className="job-tab text-center">
            <ul className="nav nav-tabs justify-content-center">
              <li
                onClick={this.openTab}
                data-id="hotJobs"
                className="tabTitle active"
              >
                <a> Hot Jobs</a>
              </li>
              <li
                data-id="recentJobs"
                onClick={this.openTab}
                className="tabTitle"
              >
                <a>Recent Jobs</a>
              </li>
              <li
                data-id="popularJobs"
                onClick={this.openTab}
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
