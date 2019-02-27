import React, { Component, Fragment } from "react";
import withContext from "../../hoc/ContextConsumer";
import Axios from "axios";
import Loader from "../Loader";

class Activejobs extends Component {
  componentDidMount() {
    this.props.context.fetchUserActiveJobs();
  }

  render() {
    const {
      userActiveJobs,
      loadMoreUserActiveJobs,
      deleteUserPost
    } = this.props.context;
    const { data, isLoading } = userActiveJobs;

    return (
      <Fragment>
        {data.map(job => {
          return (
            <Fragment key={job._id}>
              <div className="role remove-item">
                <div className="left-content">
                  <div className="clearfix">
                    <span className="tr-title">
                      <a href="employer-profile.html#">{job.title}</a>
                    </span>
                    <span>
                      <a
                        href="employer-profile.html#"
                        className="btn btn-primary"
                      >
                        {job.workType}
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
                      {job.location}
                    </li>
                    <li>
                      <span>
                        <i className="fa fa-briefcase" aria-hidden="true" />
                      </span>
                      {job.experience}
                    </li>
                    <li>
                      <span>
                        <i className="fa fa-money" aria-hidden="true" />
                      </span>
                      {job.salary}
                    </li>
                  </ul>
                </div>
                <div className="right-content">
                  <span>
                    <a>
                      <i className="fa fa-pencil" />
                    </a>
                  </span>
                  <span
                    className="remove-icon"
                    onClick={() => {
                      deleteUserPost(job._id);
                    }}
                  >
                    <i className="fa fa-trash-o" />
                  </span>
                </div>
              </div>
            </Fragment>
          );
        })}
        {isLoading ? (
          <Loader />
        ) : (
          <div style={{ textAlign: "center" }}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={loadMoreUserActiveJobs}
            >
              Load More
            </button>
          </div>
        )}
      </Fragment>
    );
  }
}

export default withContext(Activejobs);
