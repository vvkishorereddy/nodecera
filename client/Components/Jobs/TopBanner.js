import React, { Component } from "react";
import { Link } from "react-router-dom";
import withContext from "../../hoc/ContextConsumer";

class TopBanner extends Component {
  render() {
    return (
      <div className="tr-breadcrumb bg-image section-before">
        <div className="container">
          <div className="breadcrumb-info text-center">
            <div className="page-title">
              <h1>Jobs</h1>
            </div>
            <ol className="breadcrumb">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="active">Jobs</li>
            </ol>
            <div className="banner-form">
              <form>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Job Keyword"
                  ref={ele => (this.search = ele)}
                  name="searchKeyWord"
                  onKeyPress={e => {
                    e.charCode === 13 && e.preventDefault();
                  }}
                />

                <button
                  type="button"
                  className="btn btn-primary"
                  value="Search"
                  onClick={e => {
                    e.preventDefault();
                    this.props.context.jobSearch(this.search.value);
                  }}
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withContext(TopBanner);
