import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import withContext from "../../hoc/ContextConsumer";
import AlertInfoComponent from "../AlertInfoComponent";

class PostJobForm extends Component {
  state = {
    summaryChar: 5000,
    responsibilitesChar: 5000,
    requirementChar: 5000
  };

  handleSubmit = () => {
    this.props.context.saveJob(this.form);
  };

  handleChange = e => {
    const inputName = e.target.name;
    if (inputName === "summary" && this.state.summaryChar <= 0) {
      e.preventDefault();
      return;
    }
    if (
      inputName === "responsibilites" &&
      this.state.responsibilitesChar <= 0
    ) {
      e.preventDefault();
      return;
    }
    if (inputName === "minRequirements" && this.state.requirementChar <= 0) {
      e.preventDefault();
      return;
    }

    this.setState(state => {
      const newState = { ...state };
      if (inputName === "summary") {
        newState.summaryChar = newState.summaryChar - 1;
      }
      if (inputName === "responsibilites") {
        newState.responsibilitesChar = newState.responsibilitesChar - 1;
      }
      if (inputName === "minRequirements") {
        newState.requirementChar = newState.requirementChar - 1;
      }

      return newState;
    });
  };

  render() {
    return (
      <Fragment>
        {!this.props.context.isCompanyProfileFilled && (
          <AlertInfoComponent
            type="warning"
            message="Please complete Profile to publish Jobs"
          />
        )}
        <div className="tr-post-job page-content">
          <div className="container">
            <div className="row">
              <div className="col-md-9">
                <form ref={ele => (this.form = ele)}>
                  <div className="short-info code-edit-small">
                    <div className="section">
                      <span className="tr-title">Short Info</span>
                      <div className="row">
                        <div className="col-sm-3">
                          <label>Title for your job</label>
                        </div>
                        <div className="col-sm-9">
                          <div className="form-group">
                            <input
                              type="text"
                              name="title"
                              className="form-control"
                              placeholder="ex, Human Resource Manager"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-3">
                          <label>Job Category</label>
                        </div>
                        <div className="col-sm-9">
                          <div className="form-group">
                            <select className="form-control" name="category">
                              <option value="">Select Category</option>
                              <option value="cat1">Cat1</option>
                              <option value="cat2">Cat2</option>
                              <option value="cat3">Cat3</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="row job-category">
                        <div className="col-sm-3">
                          <label>Job Type</label>
                        </div>
                        <div className="col-sm-9">
                          <div className="job-type">
                            <input
                              type="radio"
                              name="jobType"
                              value="full-time"
                              id="full-time"
                            />{" "}
                            <label htmlFor="full-time">Full Time</label>
                            <input
                              type="radio"
                              name="jobType"
                              value="part-time"
                              id="part-time"
                            />{" "}
                            <label htmlFor="part-time">Part Time</label>
                            <input
                              type="radio"
                              name="jobType"
                              value="freelance"
                              id="freelance"
                            />{" "}
                            <label htmlFor="freelance">Freelance</label>
                            <input
                              type="radio"
                              name="jobType"
                              value="contract"
                              id="contract"
                            />{" "}
                            <label htmlFor="contract">Contract</label>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-3">
                          <label>Job Location</label>
                        </div>
                        <div className="col-sm-9">
                          <div className="form-group">
                            <input
                              type="text"
                              name="address"
                              className="form-control"
                              placeholder="Type your address"
                            />
                          </div>
                          <div className="row">
                            <div className="col-sm-6">
                              <div className="form-group">
                                <input
                                  type="text"
                                  name="city"
                                  className="form-control"
                                  placeholder="City"
                                />
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="form-group">
                                <input
                                  type="text"
                                  name="country"
                                  className="form-control"
                                  placeholder="Country"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-3">
                          <label>Salary Information</label>
                        </div>
                        <div className="col-sm-9">
                          <div className="row">
                            <div className="col-sm-12">
                              <div className="form-group">
                                <input
                                  type="text"
                                  name="salary"
                                  className="form-control"
                                  placeholder="Type your salary"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-3">
                          <label>Application Deadline</label>
                        </div>
                        <div className="col-sm-9">
                          <div className="calendar form-group">
                            <input
                              type="date"
                              className="form-control"
                              placeholder="2019-06-25"
                              name="lastDate"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="row exprience-level">
                        <div className="col-sm-3">
                          <label>Exprience Level</label>
                        </div>
                        <div className="col-sm-9">
                          <div className="exprience">
                            <input
                              type="radio"
                              name="exprienceLevel"
                              value="entry-level"
                              id="entry-level"
                            />{" "}
                            <label htmlFor="entry-level">Entry Level</label>
                            <input
                              type="radio"
                              name="exprienceLevel"
                              value="mid-level"
                              id="mid-level"
                            />{" "}
                            <label htmlFor="mid-level">Mid Level</label>
                            <input
                              type="radio"
                              name="exprienceLevel"
                              value="mid-senior"
                              id="mid-senior"
                            />{" "}
                            <label htmlFor="mid-senior">Mid-Senior Level</label>
                            <input
                              type="radio"
                              name="exprienceLevel"
                              value="top-level"
                              id="top-level"
                            />{" "}
                            <label htmlFor="top-level">Top Level</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="job-description section">
                    <span className="tr-title">Job Description</span>
                    <div className="row">
                      <div className="col-sm-3">
                        <label>Job Summary</label>
                      </div>
                      <div className="col-sm-9">
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            name="summary"
                            rows="10"
                            placeholder="Write few lines about your Job"
                            onKeyPress={this.handleChange}
                          />
                        </div>
                        <span className="characters-left">
                          {this.state.summaryChar} Characters left
                        </span>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-sm-3">
                        <label>Key Responsibilities:</label>
                      </div>
                      <div className="col-sm-9">
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            name="responsibilites"
                            rows="10"
                            placeholder="Write few lines about your Job"
                            onKeyPress={this.handleChange}
                          />
                        </div>
                        <span className="characters-left">
                          {this.state.responsibilitesChar} Characters left
                        </span>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-sm-3">
                        <label>Minimum Requirements:</label>
                      </div>
                      <div className="col-sm-9">
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            name="minRequirements"
                            rows="10"
                            placeholder="Write few lines about your Job"
                            onKeyPress={this.handleChange}
                          />
                        </div>
                        <span className="characters-left">
                          {this.state.requirementChar} Characters left
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    className="premium-post section"
                    style={{ display: "none" }}
                  >
                    <span className="tr-title">Make Your Post Premium</span>
                    <p>
                      More replies means more interested buyers. With lots of
                      interested buyers, you have a better chance of selling for
                      the price that you want.{" "}
                      <a href="job-post.html#">Learn more</a>
                    </p>
                    <ul className="tr-list">
                      <li>
                        <input
                          type="radio"
                          name="radio4"
                          defaultValue="regular-post"
                          id="regular-post"
                        />
                        <label htmlFor="regular-post">Regular Post</label>
                        <span>$20.00</span>
                      </li>
                      <li>
                        <input
                          type="radio"
                          name="radio4"
                          defaultValue="urgent-job"
                          id="urgent-job"
                        />
                        <label htmlFor="urgent-job">Urgent Job </label>
                        <span>$30.00</span>
                      </li>
                      <li>
                        <input
                          type="radio"
                          name="radio4"
                          defaultValue="top-post"
                          id="top-post"
                        />
                        <label htmlFor="top-post">Top Post for 7 days</label>
                        <span>$50.00</span>
                      </li>
                      <li>
                        <input
                          type="radio"
                          name="radio4"
                          defaultValue="daily-bump"
                          id="daily-bump"
                        />
                        <label htmlFor="daily-bump">
                          Daily Bump Up for 7 days
                        </label>
                        <span>$100.00</span>
                      </li>
                    </ul>
                  </div>

                  <div className="section agreement">
                    <label htmlFor="send">
                      <input type="checkbox" name="terms" id="send" />
                      You agree to our{" "}
                      <Link to="/terms-conditions">Terms of Use</Link> and{" "}
                      <Link to="/privacy-policy">Privacy Policy</Link> and
                      acknowledge that you are the rightful owner of this item
                      and using Trade to find a genuine buyer.
                    </label>
                    <div className="buttons">
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          this.props.context.isCompanyProfileFilled &&
                            this.handleSubmit("save");
                        }}
                        type="button"
                      >
                        Post Your Job
                      </button>
                      <button
                        className="btn button-cancle"
                        onClick={() => {
                          this.handleSubmit("clear");
                        }}
                        type="button"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <div className="col-md-3">
                <div className="section quick-rules">
                  <span className="tr-title">Quick Rules</span>
                  <p>
                    Posting an ad on <a href="job-post.html#">Seeker.com</a> is
                    free! However, all post must follow our rules:
                  </p>
                  <ul className="tr-list">
                    <li>Make sure you post in the correct category.</li>
                    <li>
                      Do not post the same ad more than once or repost an ad
                      within 48 hours.
                    </li>
                    <li>Do not upload pictures with watermarks.</li>
                    <li>
                      Do not post ads containing multiple items unless it's a
                      package deal.
                    </li>
                    <li>
                      Do not put your email or phone numbers in the title or
                      description.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </div>
      </Fragment>
    );
  }
}

export default withContext(PostJobForm);
