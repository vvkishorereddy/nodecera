import React, { Component } from "react";
import JobRow from "../JobRow";
import withContext from "../../hoc/ContextConsumer";
import Loader from "../Loader";

class PopularJobs extends Component {
  render() {
    const { data, isLoading } = this.props.context.popularJobs;
    return isLoading ? (
      <Loader />
    ) : (
      <div className="row">
        {data.map(data => {
          return <JobRow job={data} key={data._id} />;
        })}
      </div>
    );
  }
}

export default withContext(PopularJobs);
