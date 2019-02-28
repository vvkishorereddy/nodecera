import React, { Component } from "react";
import JobRow from "../JobRow";
import withContext from "../../hoc/ContextConsumer";

class RecentJobs extends Component {
  render() {
    const { recentJobs } = this.props.context;
    return (
      <div className="row">
        {recentJobs.map(data => (
          <JobRow job={data} key={data._id} />
        ))}
      </div>
    );
  }
}

export default withContext(RecentJobs);
