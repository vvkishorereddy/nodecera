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
      setToken: this.setToken,
      getToken: this.getToken,
      removeToken: this.removeToken,
      getUserProfile: this.getUserProfile,
      saveJob: this.saveJob,
      saveUserSubscribe: this.saveUserSubscribe,
      getSingleJob: this.getSingleJob,
      editProfile: this.editProfile,
      editCancel: this.editCancel,
      uploadImage: this.uploadImage,
      handleChange: this.handleChange,
      upDateProfile: this.upDateProfile,
      fetchCompanyData: this.fetchCompanyData,
      jobSearch: this.jobSearch,
      uploadExcel: this.uploadExcel,
      fetchUserActiveJobs: this.fetchUserActiveJobs,
      loadMoreUserActiveJobs: this.loadMoreUserActiveJobs,
      deleteUserPost: this.deleteUserPost
    };
  }

  setToken = access_token => localStorage.setItem("access_token", access_token);

  getToken = () => localStorage.getItem("access_token");

  removeToken = () => localStorage.removeItem("access_token");

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

  deleteUserPost = async postId => {
    let url = `/api/jobs/${postId}`;
    const response = await AxiosFunctions.deleteFunction(url);

    // filter deleted
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

  fetchJobs = () => {
    this.setLoadingTrue();
    const skip = this.state.jobsPageNumber;
    Axios.get("/api/jobs", { params: { limit: 10, skip: skip } }).then(res => {
      const { data } = res;
      if (!!data.data) {
        data.data.map(job => {
          job.title = TextTrim(job.title, 36);
          job.location = TextTrim(job.location, 30);
          return job;
        });

        this.setState(state => {
          return {
            ...state,
            jobs: [...state.jobs, ...data.data]
          };
        }, this.setLoadingFalse());
      }
    });
  };

  //Auth Functions

  LoginUser = (email, password) => {
    this.setState({ ...this.state, isLoading: true });
    Axios.post("/api/login", {
      email,
      password
    }).then(response => {
      const { data } = response;

      if (!data.data || !data.status) {
        this.removeToken();
        this.setState(
          {
            ...this.state,
            isLogged: false,
            isLoading: false,
            loggedUser: {}
          },
          () => {
            this.props.history.replace("/login");
          }
        );
      } else {
        this.setToken(data.data.access_token);
        this.setState(
          {
            ...this.state,
            isLogged: true,
            isLoading: false,
            loggedUser: {
              access_token: data.data.access_token
            }
          },
          () => {
            this.props.history.replace("/");
          }
        );
      }
    });
  };

  userLogOut = () => {
    this.removeToken();
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

  isLoggedIn = () => {
    if (!!this.getToken()) {
      this.setState({
        ...this.state,
        isLogged: true
      });
    }

    return !!this.getToken();
  };

  // fetch jobs list

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

  getUserProfile = async () => {
    this.setLoadingTrue();
    let url = `/api/user/profile`;
    let params = {};

    const response = await AxiosFunctions.getFunction(url, params);
    console.log(response);
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

  uploadImage = filesData => {
    const access_token = this.getToken();
    const formData = new FormData();
    formData.append("file", filesData.files[0]);

    Axios.post("/api/upload", formData, {
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

  upDateProfile = e => {
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

    Axios.post("/api/company", data, {
      headers: {
        "x-access-token": access_token
      }
    }).then(response => {
      this.setState(state => ({
        ...state,
        companyInfo: {
          ...state.companyInfo,
          isEditing: false
        }
      }));
    });
  };

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
