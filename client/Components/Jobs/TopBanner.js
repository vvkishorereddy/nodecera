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
                <div className="dropdown tr-change-dropdown">
                  <a
                    data-toggle="dropdown"
                    href="listing.html#"
                    aria-expanded="false"
                  >
                    <span className="change-text">Location</span>
                    <i className="fa fa-angle-down" />
                  </a>
                  <ul className="dropdown-menu tr-change">
                    <li>
                      <a href="listing.html#">Location</a>
                    </li>
                    <li>
                      <a href="listing.html#">Location 1</a>
                    </li>
                    <li>
                      <a href="listing.html#">Location 2</a>
                    </li>
                    <li>
                      <a href="listing.html#">Location 3</a>
                    </li>
                  </ul>
                </div>
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
