import React, { Component, Fragment } from "react";
import JobRow from "../JobRow";
import AddResume from "../AddResume";
import withContext from "../../hoc/ContextConsumer";
import Loader from "../Loader";

class FourColumn extends Component {
  render() {
    const { data } = this.props.context.totalJobs;
    return (
      <Fragment>
        <div className="row">
          {data.map((data, index) => (
            <Fragment key={data._id}>
              <JobRow job={data} />
              {!((index + 1) % 12) && <AddResume />}
            </Fragment>
          ))}
        </div>
      </Fragment>
    );
  }
}

export default withContext(FourColumn);
