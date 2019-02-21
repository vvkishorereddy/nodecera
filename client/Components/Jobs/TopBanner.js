import React, { Component } from "react";

export default class TopBanner extends Component {
  render() {
    return (
      <div className="tr-breadcrumb bg-image section-before">
        <div className="container">
          <div className="breadcrumb-info text-center">
            <div className="page-title">
              <h1>Graphics Designer</h1>
            </div>
            <ol className="breadcrumb">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li className="active">Graphics Design</li>
            </ol>
            <div className="banner-form">
              <form action="listing.html#">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Job Keyword"
                />

                {/* /.category-change */}
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
