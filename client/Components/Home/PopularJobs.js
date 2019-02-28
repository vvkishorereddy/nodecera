import React, { Component } from "react";
import JobRow from "../JobRow";
import withContext from "../../hoc/ContextConsumer";

class PopularJobs extends Component {
  render() {
    const { popularJobs } = this.props.context;

    return (
      <div className="row">
        {popularJobs.map(data => (
          <JobRow job={data} key={data._id} />
        ))}
      </div>
    );
  }
}

export default withContext(PopularJobs);
