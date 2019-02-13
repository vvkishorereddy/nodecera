import React, { Component } from "react";

export default class Details extends Component {
  render() {
    return (
      <div className="all-view section-padding">
        <div className="container">
          <div className="section">
            <ul className="tr-list resume-info">
              <li className="career-objective media">
                <div className="icon">
                  <i className="fa fa-black-tie" aria-hidden="true" />
                </div>
                <div className="media-body">
                  <span className="tr-title">Company Info</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>{" "}
                  <br />
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni।
                  </p>
                </div>
              </li>
              {/* /.career-objective */}
              <li className="mission-vision media">
                <div className="icon">
                  <i className="fa fa-anchor" aria-hidden="true" />
                </div>
                <div className="media-body">
                  <span className="tr-title">Mission &amp; Vision</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>{" "}
                  <br />
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni।
                  </p>
                </div>
              </li>
              {/* /.mission-vision */}
              <li className="company-achievement media">
                <div className="icon">
                  <i className="fa fa-book" aria-hidden="true" />
                </div>
                <div className="media-body">
                  <span className="tr-title">Company Achievement</span>
                  <ul className="tr-list">
                    <li>
                      <span>Introducing Our Mobile “Nexus”</span>
                      <ul className="tr-list">
                        <li>Year: 27 May, 2010</li>
                      </ul>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                      </p>
                    </li>
                    <li>
                      <span>Win Award Stardom</span>
                      <ul className="tr-list">
                        <li>Year: 27 May, 2010</li>
                      </ul>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                      </p>
                    </li>
                  </ul>
                </div>
              </li>
              {/* /.company-achievement */}
            </ul>
            <div className="buttons pull-right">
              <a href="view-compnay.html#" className="btn button-send">
                <i className="fa fa-envelope-o" aria-hidden="true" />
                Send Email
              </a>
              <a href="view-compnay.html#" className="btn btn-primary">
                <i className="fa fa-briefcase" aria-hidden="true" />
                See All Job Post
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
