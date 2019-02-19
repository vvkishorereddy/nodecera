import React, { Component, Fragment } from "react";
import JobRowOtherType from "../JobRowOtherType";
import withContext from "../../hoc/ContextConsumer";
import AddResume from "../AddResume";

class TwoColumn extends Component {
  render() {
    const { jobs } = this.props.context;
    return (
      <Fragment>
        <div className="row">
          {jobs.map(data => (
            <JobRowOtherType job={data} key={data._id} />
          ))}
        </div>
        <AddResume />
        <div className="row">
          {jobs.map(data => (
            <JobRowOtherType job={data} key={data._id} />
          ))}
        </div>
      </Fragment>
    );
  }
}

export default withContext(TwoColumn);
