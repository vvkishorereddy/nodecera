import React, { Component, Fragment } from "react";
import withContext from "../../hoc/ContextConsumer";
import Axios from "axios";

class Activejobs extends Component {
  componentDidMount() {
    this.props.context.fetchUserActiveJobs();
  }

  render() {
    const { data } = this.props.context.userActiveJobs;
    return (
      <Fragment>
        {data.map(job => {
          return (
            <Fragment key={job._id}>
              <div className="role remove-item">
                <div className="left-content">
                  <div className="clearfix">
                    <span className="tr-title">
                      <a href="employer-profile.html#">Design Associate</a>
                    </span>
                    <span>
                      <a
                        href="employer-profile.html#"
                        className="btn btn-primary"
                      >
                        Part Time
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
                      San Francisco, CA, US
                    </li>
                    <li>
                      <span>
                        <i className="fa fa-briefcase" aria-hidden="true" />
                      </span>
                      Mid Level
                    </li>
                    <li>
                      <span>
                        <i className="fa fa-money" aria-hidden="true" />
                      </span>
                      $5,000 - $6,000
                    </li>
                  </ul>
                </div>
                <div className="right-content">
                  <span>
                    <a href="employer-profile.html#">
                      <i className="fa fa-pencil" />
                    </a>
                  </span>
                  <span className="remove-icon">
                    <i className="fa fa-trash-o" />
                  </span>
                </div>
              </div>
            </Fragment>
          );
        })}
        <button
          type="button"
          onClick={this.props.context.loadMoreUserActiveJobs}
        >
          Load More
        </button>
      </Fragment>
    );
  }
}

export default withContext(Activejobs);
