import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class TopBanner extends Component {
  render() {
    return (
      <div className="tr-breadcrumb bg-image section-before">
        <div className="container">
          <div className="breadcrumb-info text-center">
            <div className="page-title">
              <h1>{this.props.title}</h1>
            </div>
            <ol className="breadcrumb">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="active">{this.props.title}</li>
            </ol>
          </div>
        </div>
        {/* /.container */}
      </div>
    );
  }
}
