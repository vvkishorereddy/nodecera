import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class PageNotFound extends Component {
  render() {
    return (
      <div className="page-content">
        <div className="container">
          <div className="tr-found section">
            <div className="row">
              <div className="col-md-4">
                <div className="found-image">
                  <img
                    src="images/others/404.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-md-8">
                <div className="found-info">
                  <h1>404</h1>
                  <h2>Page Not Found</h2>
                  <p>We can't seem to find the page you're looking for.</p>
                  <Link to="/" className="btn btn-primary">
                    Back to home
                  </Link>
                </div>
              </div>
            </div>
            {/* /.row */}
          </div>
          {/* /.section */}
        </div>
        {/* /.container */}
      </div>
    );
  }
}
