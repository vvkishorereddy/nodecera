import React, { Component, Fragment } from "react";
import JobRow from "../JobRow";
import AddResume from "../AddResume";
import withContext from "../../hoc/ContextConsumer";
import Loader from "../Loader";

class FourColumn extends Component {
  render() {
    const { jobs } = this.props.context;
    return this.props.context.isLoading ? (
      <Loader />
    ) : (
      <Fragment>
        <div className="row">
          {jobs.map((data, index) => (
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
