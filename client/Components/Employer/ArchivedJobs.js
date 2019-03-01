import React, { Component, Fragment } from "react";
import withContext from "../../hoc/ContextConsumer";
import Loader from "../Loader";

class ArchivedJobs extends Component {
  render() {
    const {
      userArchivedJobs,
      loadMoreUserArchivedJobs,
      deleteUserArchivedPost
    } = this.props.context;
    const { data, isLoading } = userArchivedJobs;

    return (
      <Fragment>
        {data.map(job => {
          return (
            <Fragment>
              <div className="job-item remove-item">
                <div className="job-info">
                  <div className="left-content">
                    <div className="clearfix">
                      <span className="tr-title">
                        <a href="job-post.html">{job.title}</a>
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
                  </div>
                  <div className="right-content">
                    <span
                      className="remove-icon"
                      onClick={() => {
                        deleteUserArchivedPost(job._id);
                      }}
                    >
                      <i className="fa fa-trash-o" />
                    </span>
                  </div>
                </div>
              </div>
            </Fragment>
          );
        })}
        {isLoading ? (
          <Loader />
        ) : data.length ? (
          <div style={{ textAlign: "center" }}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={loadMoreUserArchivedJobs}
            >
              Load More
            </button>
          </div>
        ) : (
          <div style={{ textAlign: "center" }}>
            <button type="button" className="btn btn-primary">
              No more Archived posts
            </button>
          </div>
        )}
      </Fragment>
    );
  }
}

export default withContext(ArchivedJobs);
