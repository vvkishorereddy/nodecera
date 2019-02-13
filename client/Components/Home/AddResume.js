import React, { Component } from "react";

export default class AddResume extends Component {
  render() {
    return (
      <div className="tr-cta">
        <div className="container">
          <div className="cta-content section">
            <div className="cta-info">
              <div className="pull-left">
                <h1>Add your resume and let your next job find you.</h1>
              </div>
              <a href="index1.html#" className="btn btn-primary pull-right">
                Add Your Resume
              </a>
            </div>
          </div>
          {/* /.cta-content */}
        </div>
        {/* /.container */}
      </div>
    );
  }
}
