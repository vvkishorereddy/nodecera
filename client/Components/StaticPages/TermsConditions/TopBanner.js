import React, { Component } from "react";

export default class TopBanner extends Component {
  render() {
    return (
      <div className="tr-breadcrumb bg-image section-before">
        <div className="container">
          <div className="breadcrumb-info text-center">
            <div className="page-title">
              <h1>Terms & Conditions</h1>
            </div>
            <ol className="breadcrumb">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li className="active">Terms & Conditions</li>
            </ol>
          </div>
        </div>
        {/* /.container */}
      </div>
    );
  }
}
