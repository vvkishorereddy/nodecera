import React, { Component, Fragment } from "react";
import JobRow from "../JobRow";
import withContext from "../../hoc/ContextConsumer";
import Loader from "../Loader";

class HotJobs extends Component {
  componentDidMount() {
    this.props.context.fetchHotJobs();
  }

  render() {
    const { data, isLoading } = this.props.context.hotJobs;
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

export default withContext(HotJobs);
