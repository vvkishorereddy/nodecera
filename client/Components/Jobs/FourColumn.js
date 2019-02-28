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
              {!(index % 12) && index !== 0 && <AddResume />}
              <JobRow job={data} />
            </Fragment>
          ))}
        </div>
      </Fragment>
    );
  }
}

export default withContext(FourColumn);
