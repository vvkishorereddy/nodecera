import React, { Component } from "react";

export default class AppBanner extends Component {
  render() {
    return (
      <div className="tr-download-app bg-image section-padding section-before">
        <div className="container text-center">
          <h1>Download on App Store</h1>
          <div className="app-content">
            <div className="row">
              <div className="col-sm-4">
                <div className="download-app">
                  <a href="index1.html#">
                    <div className="download-image">
                      <img
                        src="images/icons/app1.png"
                        alt="Image"
                        className="img-fluid"
                      />
                    </div>
                    <div className="download-info">
                      <span>available on</span>
                      <strong>Google Play</strong>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="download-app">
                  <a href="index1.html#">
                    <div className="download-image">
                      <img
                        src="images/icons/app2.png"
                        alt="Image"
                        className="img-fluid"
                      />
                    </div>
                    <div className="download-info">
                      <span>available on</span>
                      <strong>App Store</strong>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="download-app">
                  <a href="index1.html#">
                    <div className="download-image">
                      <img
                        src="images/icons/app3.png"
                        alt="Image"
                        className="img-fluid"
                      />
                    </div>
                    <div className="download-info">
                      <span>available on</span>
                      <strong>Windows Store</strong>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            {/* /.row */}
          </div>
          {/* /.app-content */}
        </div>
        {/* /.contaioner */}
      </div>
    );
  }
}
