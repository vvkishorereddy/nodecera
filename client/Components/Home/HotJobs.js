import React, { Component } from "react";
import JobRow from "../JobRow";
import withContext from "../../hoc/ContextConsumer";

class HotJobs extends Component {
  render() {
    const { hotJobs } = this.props.context;

    return (
      <div className="row">
        {hotJobs.map(data => {
          return <JobRow job={data} key={data._id} />;
        })}
      </div>
    );
  }
}

export default withContext(HotJobs);
