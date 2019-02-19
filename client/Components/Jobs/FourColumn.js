import React, { Component, Fragment } from "react";
import JobRow from "../JobRow";
import AddResume from "../AddResume";
import withContext from "../../hoc/ContextConsumer";

class FourColumn extends Component {
  render() {
    const { jobs } = this.props.context;
    return (
      <Fragment>
        <div className="row">
          {jobs.map(data => (
            <JobRow job={data} key={data._id} />
          ))}
        </div>
        <AddResume />
        <div className="row">
          {jobs.map(data => (
            <JobRow job={data} key={data._id} />
          ))}
        </div>
      </Fragment>
    );
  }
}

export default withContext(FourColumn);
