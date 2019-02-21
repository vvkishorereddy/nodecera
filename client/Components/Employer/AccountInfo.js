import React, { Component, Fragment } from "react";
import withContext from "../../hoc/ContextConsumer";
import Axios from "axios";

class AccountInfo extends Component {
  state = {
    isEditing: false,
    socialLinks: {
      facebook: "https://www.facebook.com",
      twitter: "https://www.twitter.com",
      linkedin: "https://www.linkedin.com",
      instagram: "https://www.instagram.com"
    },
    company_name: "",
    company_location: "",
    company_phone: "",
    company_email: "",
    company_website: "",
    company_size: "",
    company_logo: ""
  };

  editCancel = e => {
    e.preventDefault();
    this.setState(state => ({
      ...state,
      isEditing: false
    }));
  };
  upDateProfile = e => {
    e.preventDefault();
    const access_token = this.props.context.getToken();
    // update data
    const {
      company_name,
      company_location,
      company_phone,
      company_email,
      company_website,
      company_logo
    } = this.state;

    const data = {
      name: company_name,
      description: "Description",
      address: company_location,
      phone: company_phone,
      email: company_email,
      website: company_website,
      logo: company_logo
    };

    Axios.post("/api/company", data, {
      headers: {
        "x-access-token": access_token
      }
    }).then(response => {
      console.log(response);
    });

    this.setState(state => ({
      ...state,
      isEditing: false
    }));
  };
  editProfile = e => {
    e.preventDefault();
    this.setState(state => ({
      ...state,
      isEditing: true
    }));
  };

  uploadImage = e => {
    const access_token = this.props.context.getToken();
    const formData = new FormData();
    formData.append("file", this.files.files[0]);

    Axios.post("/api/upload", formData, {
      headers: {
        "content-type": "multipart/form-data",
        "x-access-token": access_token
      }
    }).then(response => {
      this.setState({
        ...this.state,
        company_logo: response.data.data.name
      });
    });
  };

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  render() {
    const {
      isEditing,
      company_name,
      company_location,
      company_phone,
      company_email,
      company_website,
      company_logo,
      socialLinks
    } = this.state;
    return (
      <Fragment>
        <form ref={ele => (this.forms = ele)}>
          <div className="tr-fun-fact">
            <div className="row">
              <div className="col-sm-4">
                <div className="fun-fact media">
                  <div className="fun-fact-icon">
                    <img
                      src="images/icons/fun-fact4.png"
                      alt="images"
                      className="img-fluid"
                    />
                  </div>
                  <div className="media-body">
                    <h1 className="counter">329</h1>
                    <span>Total job post</span>
                  </div>
                </div>
                {/* /.fun-fact */}
              </div>
              <div className="col-sm-4">
                <div className="fun-fact media">
                  <div className="fun-fact-icon">
                    <img
                      src="images/icons/fun-fact5.png"
                      alt="images"
                      className="img-fluid"
                    />
                  </div>
                  <div className="media-body">
                    <h1 className="counter">23,563</h1>
                    <span>Application submit</span>
                  </div>
                </div>
                {/* /.fun-fact */}
              </div>
              <div className="col-sm-4">
                <div className="fun-fact media">
                  <div className="fun-fact-icon">
                    <img
                      src="images/icons/fun-fact6.png"
                      alt="images"
                      className="img-fluid"
                    />
                  </div>
                  <div className="media-body">
                    <h1 className="counter">27</h1>
                    <span>Call for interview</span>
                  </div>
                </div>
                {/* /.fun-fact */}
              </div>
            </div>
            {/* ./row */}
          </div>
          {/* /.tr-fun-fact */}
          <div className="section resume-last-updated">
            <span className="icon pull-left">
              <img src="images/icons/1.png" alt="Icon" className="img-fluid" />
            </span>
            <div className="updated-info">
              <span className="pull-left">Profile last updated on</span>
              <span className="pull-right">24/4/2017</span>
            </div>
          </div>
          {/* /.resume-last-updated */}
          <div className="section display-information">
            <div className="title title-after">
              <div className="icon">
                <img
                  src="images/icons/2.png"
                  alt="Icon"
                  className="img-fluid"
                />
              </div>
              <span>Your display information</span>
            </div>
            <div className="change-photo">
              <div className="user-image">
                <img src={company_logo} alt="Image" className="img-fluid" />
              </div>
              <div className="upload-photo">
                <label className="btn btn-primary" htmlFor="upload-photo">
                  <input
                    type="file"
                    id="upload-photo"
                    name="uplaod-photo"
                    onChange={this.uploadImage}
                    ref={ele => (this.files = ele)}
                  />
                  Change Photo
                </label>
                <span className="max-size">Max 20 MB</span>
              </div>
            </div>
            <ul className="tr-list account-details">
              <li>
                Compnay Name
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="company_name"
                    value={company_name}
                    onChange={this.handleChange}
                    disabled={isEditing ? false : true}
                  />
                </div>
              </li>
              <li>
                Address
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="company_location"
                    value={company_location}
                    onChange={this.handleChange}
                    disabled={isEditing ? false : true}
                  />
                </div>
              </li>
              <li>
                Phone Number
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="company_phone"
                    value={company_phone}
                    onChange={this.handleChange}
                    disabled={isEditing ? false : true}
                  />
                </div>
              </li>
              <li>
                Email Id
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="company_email"
                    value={company_email}
                    onChange={this.handleChange}
                    disabled={isEditing ? false : true}
                  />
                </div>
              </li>
              <li>
                Industry Expertise
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="company_website"
                    value={company_website}
                    onChange={this.handleChange}
                    disabled={isEditing ? false : true}
                  />
                </div>
              </li>
            </ul>
          </div>
          {/* /.display-information */}
          <div className="section" style={{ display: "none" }}>
            <div className="title title-after">
              <div className="icon">
                <img
                  src="images/icons/3.png"
                  alt="Icon"
                  className="img-fluid"
                />
              </div>
              <span>Social Link</span>
            </div>
            <ul className="social social-icon-bg tr-list">
              <li>
                <i className="fa fa-facebook" />
                <span className="media-body">
                  <a href={socialLinks.facebook} target="_blank">
                    {socialLinks.facebook}
                  </a>
                </span>
              </li>
              <li>
                <i className="fa fa-twitter" />
                <span className="media-body">
                  <a href={socialLinks.twitter} target="_blank">
                    {socialLinks.twitter}
                  </a>
                </span>
              </li>
              <li>
                <i className="fa fa-instagram" />
                <span className="media-body">
                  <a href={socialLinks.instagram} target="_blank">
                    {socialLinks.instagram}
                  </a>
                </span>
              </li>
              <li>
                <i className="fa fa-linkedin" />
                <span className="media-body">
                  <a href={socialLinks.linkedin} target="_blank">
                    {socialLinks.linkedin}
                  </a>
                </span>
              </li>
            </ul>
          </div>

          {isEditing ? (
            <div className="buttons pull-right">
              <button
                type="button"
                className="btn button-cancle"
                onClick={this.editCancel}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.upDateProfile}
              >
                Update Profile
              </button>
            </div>
          ) : (
            <div className="buttons pull-right">
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.editProfile}
              >
                Edit Profile
              </button>
            </div>
          )}
        </form>
      </Fragment>
    );
  }
}

export default withContext(AccountInfo);
