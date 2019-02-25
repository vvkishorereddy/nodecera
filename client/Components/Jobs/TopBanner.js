import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class TopBanner extends Component {
  render() {
    return (
      <div className="tr-breadcrumb bg-image section-before">
        <div className="container">
          <div className="breadcrumb-info text-center">
            <div className="page-title">
              <h1>Latest Jobs</h1>
            </div>
            <ol className="breadcrumb">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="active">Jobs</li>
            </ol>
            <div className="banner-form">
              <form action="listing.html#">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Job Keyword"
                  ref={ele => (this.search = ele)}
                  name="searchKeyWord"
                  onKeyPress={e => {
                    this.props.context.jobSearch(this.search.value);
                  }}
                />

                <button
                  type="submit"
                  className="btn btn-primary"
                  value="Search"
                >
                  Search
                </button>
              </form>
            </div>
            {/* /.banner-form */}
          </div>
        </div>
        {/* /.container */}
      </div>
    );
  }
}
