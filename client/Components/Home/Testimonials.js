import React, { Component } from "react";

export default class Testimonials extends Component {
  render() {
    return (
      <div
        className="tr-testimonial-2 text-center"
        style={{ marginTop: "50px" }}
      >
        <div className="container">
          <div className="section-title">
            <h1>Kind Words From Happy Candidates</h1>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-3">
              <div className="testimonial">
                <div className="testimonial-info">
                  <p>
                    ‘’ Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore aliqua.
                    Ut enim ad minim veniam, quis nostrud exer ‘’
                  </p>
                </div>
                <div className="testimonial-image">
                  <img
                    src="images/others/testimonial-img.png"
                    alt="Imag"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="testimonial">
                <div className="testimonial-info">
                  <p>
                    ‘’ Consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore aliqua. Ut enim ad minim
                    veniam, quis nostrud exer ‘’
                  </p>
                </div>
                <div className="testimonial-image">
                  <img
                    src="images/others/testimonial-img.png"
                    alt="Imag"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="testimonial">
                <div className="testimonial-info">
                  <p>
                    “Unt in culpa qui officia deserunt mollit anim id est
                    laborum. Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque ”
                  </p>
                </div>
                <div className="testimonial-image">
                  <img
                    src="images/others/testimonial-img.png"
                    alt="Imag"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="testimonial">
                <div className="testimonial-info">
                  <p>
                    “ Ommodo consequat. Duis aute irure dolor in reprehenderit
                    in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat ”
                  </p>
                </div>
                <div className="testimonial-image">
                  <img
                    src="images/others/testimonial-img.png"
                    alt="Imag"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </div>
    );
  }
}
