import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Axios from "axios";
import * as TextTrim from "../Helpers/TextTrim";
import * as JwtToken from "../Helpers/JwtToken";
import AxiosFunctions from "../Helpers/AxiosFunctions";

const AppContext = React.createContext();
const AppConsumer = AppContext.Consumer;

class AppProviderBasic extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      isLogged: false,
      jobs: [],
      hotJobs: [],
      popularJobs: [],
      recentJobs: [],
      similarJobs: [],
      jobsDetails: {},
      loggedUser: {},
      companyInfo: {
        isEditing: false,
        socialLinks: {
          facebook: "https://www.facebook.com",
          twitter: "https://www.twitter.com",
          linkedin: "https://www.linkedin.com",
          instagram: "https://www.instagram.com"
        },
        company_name: "",
        company_description: "",
        company_location: "",
        company_phone: "",
        company_email: "",
        company_website: "",
        company_size: "",
        company_logo: ""
      },
      userActiveJobs: {
        data: [],
        skip: 0,
        isLoading: false
      }
    };
    this.methodsList = {
      setLoadingTrue: this.setLoadingTrue,
      setLoadingFalse: this.setLoadingFalse,
      LoginUser: this.LoginUser,
      userLogOut: this.userLogOut,
      isLoggedIn: this.isLoggedIn,
      fetchJobs: this.fetchJobs,
      getToken: this.getToken,
      getUserProfile: this.getUserProfile,
      saveJob: this.saveJob,
      saveUserSubscribe: this.saveUserSubscribe,
      getSingleJob: this.getSingleJob,
      editProfile: this.editProfile,
      editCancel: this.editCancel,
      uploadCompanyLogo: this.uploadCompanyLogo,
      handleChange: this.handleChange,
      upDateCompanyProfile: this.upDateCompanyProfile,
      fetchCompanyData: this.fetchCompanyData,
      jobSearch: this.jobSearch,
      uploadExcel: this.uploadExcel,
      fetchUserActiveJobs: this.fetchUserActiveJobs,
      loadMoreUserActiveJobs: this.loadMoreUserActiveJobs,
      deleteUserPost: this.deleteUserPost
    };
  }

  getToken = () => localStorage.getItem("access_token");

  setLoadingTrue = () => {
    this.setState(state => {
      return {
        ...state,
        isLoading: true
      };
    });
  };

  setLoadingFalse = () => {
    this.setState(state => {
      return {
        ...state,
        isLoading: false
      };
    });
  };

  saveUserSubscribe = async (email, cb) => {
    let url = `/api/subscribe`;
    let data = { email: email };
    let params = {};
    const response = await AxiosFunctions.postFunction(url, data, params);
    cb(response);
  };

  //Auth related Functions

  LoginUser = async (email, password) => {
    this.setLoadingTrue();
    let url = `/api/login`;
    let postData = {
      email,
      password
    };
    let params = {};
    let isLogged = false;
    let loggedUser = {};
    let redirectUrl = `/login`;
    const response = await AxiosFunctions.postFunction(url, postData, params);
    const { data } = response;

    if (!data.data || !data.status) {
      JwtToken.removeToken();
      isLogged = false;
      loggedUser = {};
      redirectUrl = `/login`;
    } else {
      JwtToken.setToken(data.data.access_token);
      isLogged = true;
      loggedUser = {
        access_token: data.data.access_token
      };
      redirectUrl = `/dashboard`;
    }

    this.setState(
      {
        ...this.state,
        isLogged: isLogged,
        loggedUser: loggedUser
      },
      () => {
        this.props.history.replace(redirectUrl);
      }
    );
    this.setLoadingFalse();
  };

  isLoggedIn = () => {
    if (!!JwtToken.getToken()) {
      this.setState({
        ...this.state,
        isLogged: true
      });
    }
    return !!JwtToken.getToken();
  };

  userLogOut = async () => {
    JwtToken.removeToken();
    this.setState(
      {
        ...this.state,
        isLogged: false,
        loggedUser: {}
      },
      () => {
        this.props.history.replace("/login");
      }
    );
  };

  //user profile functions

  getUserProfile = async () => {
    this.setLoadingTrue();
    let url = `/api/user/profile`;
    let params = {};

    const response = await AxiosFunctions.getFunction(url, params);
    console.log(response);
    this.setLoadingFalse();
  };

  //user active posts related functions

  fetchUserActiveJobs = async () => {
    let url = `/api/jobs`;
    let params = {
      limit: 5,
      skip: this.state.userActiveJobs.skip
    };
    const response = await AxiosFunctions.getFunction(url, params);
    this.setState(state => {
      return {
        ...state,
        userActiveJobs: {
          ...state.userActiveJobs,
          data: [...state.userActiveJobs.data, ...response.data.data],
          isLoading: false
        }
      };
    });
  };

  loadMoreUserActiveJobs = () => {
    this.setState(
      state => {
        return {
          ...state,
          userActiveJobs: {
            ...state.userActiveJobs,
            skip: state.userActiveJobs.skip + 5,
            isLoading: true
          }
        };
      },
      () => {
        this.fetchUserActiveJobs();
      }
    );
  };

  deleteUserPost = async postId => {
    let url = `/api/jobs/${postId}`;
    const response = await AxiosFunctions.deleteFunction(url);
    if (response.data.data.ok) {
      const filterData = this.state.userActiveJobs.data.filter(
        post => post._id !== postId
      );
      this.setState(state => {
        return {
          ...state,
          userActiveJobs: {
            ...state.userActiveJobs,
            data: filterData
          }
        };
      });
    }
  };

  //jobs list functions

  fetchJobs = async () => {
    this.setLoadingTrue();

    let url = `/api/jobs`;
    let params = {
      limit: 10,
      skip: 0
    };

    const response = await AxiosFunctions.getFunction(url, params);

    const { data } = response.data;
    if (!!data) {
      data.map(job => {
        job.title = TextTrim(job.title, 36);
        job.location = TextTrim(job.location, 30);
        return job;
      });

      this.setState(state => {
        return {
          ...state,
          jobs: [...state.jobs, ...data]
        };
      }, this.setLoadingFalse());
    }
  };

  jobSearch = async keyword => {
    this.setLoadingTrue();
    let url = `/api/jobs`;
    let params = { key: keyword };

    const response = await AxiosFunctions.getFunction(url, params);

    const { data } = response.data;
    if (!!data) {
      this.setState(state => {
        return {
          ...state,
          jobs: data
        };
      });
      this.setLoadingFalse();
    }
  };

  getSingleJob = async id => {
    this.setLoadingTrue();
    let url = `/api/jobs/${id}`;
    let params = {};
    const response = await AxiosFunctions.getFunction(url, params);
    const { data } = response.data;
    this.setState(state => {
      return {
        ...state,
        jobsDetails: data
      };
    });
    this.setLoadingFalse();
  };

  saveJob = form => {
    const data = {
      title: form.title.value,
      category: form.category.value,
      workType: form.jobType.value,
      location: form.address.value,
      city: form.city.value,
      country: form.country.value,
      salary: form.salary.value,
      last_date: form.lastDate.value,
      experience: form.exprienceLevel.value,
      summary: form.summary.value,
      responsibilities: form.responsibilites.value,
      requirements: form.minRequirements.value
    };

    const access_token = this.getToken();
    let headers = {};
    if (!!access_token) {
      headers["x-access-token"] = access_token;
    }

    Axios.post("/api/jobs", data, {
      headers: headers
    }).then(response => console.log(response));

    form.title.value = "";
    form.category.value = "";
    form.jobType.value = "";
    form.address.value = "";
    form.city.value = "";
    form.country.value = "";
    form.salary.value = "";
    form.lastDate.value = "";
    form.exprienceLevel.value = "";
    form.summary.value = "";
    form.responsibilites.value = "";
    form.minRequirements.value = "";
    form.terms.value = "";
    form.exprienceLevel.forEach(e => {
      e.checked = false;
    });
    form.jobType.forEach(e => {
      e.checked = false;
    });
    form.terms.parentElement.classList.value = "";
  };

  editProfile = e => {
    e.preventDefault();
    this.setState(state => ({
      ...state,
      companyInfo: {
        ...state.companyInfo,
        isEditing: true
      }
    }));
  };

  editCancel = e => {
    e.preventDefault();
    this.setState(state => ({
      ...state,
      companyInfo: {
        ...state.companyInfo,
        isEditing: false
      }
    }));
  };

  uploadExcel = filesData => {
    const access_token = this.getToken();
    const formData = new FormData();
    formData.append("file", filesData.files[0]);

    Axios.post("/api/upload/excel", formData, {
      headers: {
        "content-type": "multipart/form-data",
        "x-access-token": access_token
      }
    }).then(response => {
      this.setState(state => ({
        ...state,
        companyInfo: {
          ...state.companyInfo,
          company_logo: response.data.data.logo
        }
      }));
    });
  };

  handleChange = (name, value) => {
    this.setState(state => ({
      ...state,
      companyInfo: {
        ...state.companyInfo,
        [name]: value
      }
    }));
  };

  // employer company related functions

  fetchCompanyData = async () => {
    let url = `/api/company`;
    let params = {};
    const response = await AxiosFunctions.getFunction(url, params);

    const { data } = response.data;

    this.setState(state => ({
      ...state,
      companyInfo: {
        ...state.companyInfo,
        company_name: data.name,
        company_description: data.description,
        company_location: data.address,
        company_phone: data.phone,
        company_email: data.email,
        company_website: data.website,
        company_logo: data.logo
      }
    }));
  };

  uploadCompanyLogo = async filesData => {
    const formData = new FormData();
    formData.append("file", filesData.files[0]);

    let url = `/api/upload`;
    const response = await AxiosFunctions.uploadFunction(url, formData);
    this.setState(state => ({
      ...state,
      companyInfo: {
        ...state.companyInfo,
        company_logo: response.data.data.logo
      }
    }));
  };

  upDateCompanyProfile = async e => {
    e.preventDefault();
    const access_token = this.getToken();
    // update data
    const {
      company_name,
      company_description,
      company_location,
      company_phone,
      company_email,
      company_website
    } = this.state.companyInfo;

    const data = {
      name: company_name,
      description: company_description,
      address: company_location,
      phone: company_phone,
      email: company_email,
      website: company_website
    };

    let url = `/api/company`;
    let params = {};

    const response = await AxiosFunctions.postFunction(url, data, params);
    this.setState(state => ({
      ...state,
      companyInfo: {
        ...state.companyInfo,
        isEditing: false
      }
    }));
  };

  render() {
    return (
      <AppContext.Provider value={{ ...this.state, ...this.methodsList }}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

const AppProvider = withRouter(AppProviderBasic);

export { AppContext, AppProvider, AppConsumer };
