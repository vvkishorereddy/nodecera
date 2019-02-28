import React, { Component } from "react";
import JobRow from "../JobRow";
import withContext from "../../hoc/ContextConsumer";

class SimilarJobs extends Component {
  componentDidMount() {
    this.props.context.fetchCompanyOtherJobs();
  }
  render() {
    const { similarJobs } = this.props.context;
    return (
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
