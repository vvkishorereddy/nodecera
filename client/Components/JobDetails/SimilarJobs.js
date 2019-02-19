import React, { Component } from "react";
import JobRow from "../JobRow";
import Loader from "../Loader";
import withContext from "../../hoc/ContextConsumer";

class SimilarJobs extends Component {
  render() {
    const { similarJobs, isLoading } = this.props.context;
    return isLoading ? (
      <Loader />
    ) : (
      <div className="tr-job-posted similar-jobs">
        <span className="tr-title">Similar Jobs Post</span>
        <div className="row">
          {similarJobs.map(data => (
            <JobRow job={data} key={data._id} />
          ))}
        </div>
      </div>
    );
  }
}

export default withContext(SimilarJobs);
