import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Axios from "axios";

const AppContext = React.createContext();
const AppConsumer = AppContext.Consumer;

class AppProviderBasic extends Component {
  constructor() {
    console.log("AppProvider contructor");
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
        company_location: "",
        company_phone: "",
        company_email: "",
        company_website: "",
        company_size: "",
        company_logo: ""
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
      fetchCompanyLogo: this.fetchCompanyLogo,
      uploadImage: this.uploadImage,
      handleChange: this.handleChange,
      upDateProfile: this.upDateProfile,
      fetchCompanyData: this.fetchCompanyData
    };
  }

  componentDidMount() {
    this.isLoggedIn() && this.props.history.replace("/");
  }

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

  setToken = access_token => localStorage.setItem("access_token", access_token);

  getToken = () => localStorage.getItem("access_token");

  removeToken = () => localStorage.removeItem("access_token");

  // fetch jobs list

  fetchJobs = () => {
    this.setState({
      ...this.state,
      isLoading: true
    });
    Axios.get("/api/jobs").then(res => {
      const { data } = res;
      if (!!data.data) {
        this.setState(state => {
          return {
            ...state,
            jobs: data.data,
            hotJobs: data.data.slice(0, 8),
            popularJobs: data.data.slice(9, 18),
            recentJobs: data.data.slice(15, 22),
            similarJobs: data.data.slice(1, 5),
            isLoading: false
          };
        });
      }
    });
  };

  getSingleJob = id => {
    this.setLoadingTrue();
    Axios.get(`/api/jobs/${id}`).then(response => {
      const { data } = response.data;
      this.setState(state => {
        return {
          ...state,
          jobsDetails: data
        };
      });
      this.setLoadingFalse();
    });
  };

  getUserProfile = () => {
    this.setLoadingTrue();
    const access_token = this.getToken();
    let headers = {};
    if (!!access_token) {
      headers["x-access-token"] = access_token;
    }

    Axios.get("/api/user/profile", {
      headers: headers
    }).then(data => {
      console.log(data);
      this.setLoadingFalse();
    });
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
      requirements: form.minRequirements.value,
      company_name: "Kishore Dig File",
      company_logo: "images/job/1.png",
      company_description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore",
      company_address: "London, UK",
      company_phone: "+1234 567 8910",
      company_email: "admin@company.com",
      company_website: "www.company.com"
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

  saveUserSubscribe = (email, cb) => {
    Axios.post("/api/subscribe", { email: email }).then(response => {
      cb(response);
    });
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

  fetchCompanyLogo = () => {
    const access_token = this.getToken();
    Axios.get("/api/company/logo", {
      headers: {
        "x-access-token": access_token
      }
    }).then(response => {
      this.setState(state => ({
        ...state,
        companyInfo: {
          ...state.companyInfo,
          company_logo: response.data.data.name
        }
      }));
    });
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
          company_logo: response.data.data.name
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
      company_location,
      company_phone,
      company_email,
      company_website,
      company_logo
    } = this.state.companyInfo;

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
      this.setState(state => ({
        ...state,
        companyInfo: {
          ...state.companyInfo,
          isEditing: false
        }
      }));
    });
  };

  fetchCompanyData = () => {
    const access_token = this.getToken();
    Axios.get("/api/company", {
      headers: {
        "x-access-token": access_token
      }
    }).then(response => {
      this.setState(state => ({
        ...state,
        companyInfo: {
          ...state.companyInfo,
          company_name: response.data.data.name,
          company_location: response.data.data.address,
          company_phone: response.data.data.phone,
          company_email: response.data.data.email,
          company_website: response.data.data.website
        }
      }));
    });
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
