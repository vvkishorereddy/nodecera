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
      loggedUser: {}
    };
    this.methodsList = {
      LoginUser: this.LoginUser,
      userLogOut: this.userLogOut,
      isLoggedIn: this.isLoggedIn,
      fetchJobs: this.fetchJobs,
      setToken: this.setToken,
      getToken: this.getToken,
      removeToken: this.removeToken,
      getUserProfile: this.getUserProfile
    };
  }

  componentDidMount() {
    console.log("AppProvider did mount");
  }

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
            this.props.history.replace("/dashboard");
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
            jobsDetails: data.data[0],
            isLoading: false
          };
        });
      }
    });
  };

  getUserProfile = () => {
    const access_token = this.getToken();
    let headers;
    if (!!access_token) {
      //  headers = `Authorization: bearer ${access_token}`;
    }

    Axios.get("/api/user/profile?secret_token=" + access_token, {
      headers: {
        headers
      }
    }).then(data => console.log(data));
  };

  render() {
    console.log("AppProvider render", this.methodsList);

    return (
      <AppContext.Provider value={{ ...this.state, ...this.methodsList }}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

const AppProvider = withRouter(AppProviderBasic);

export { AppContext, AppProvider, AppConsumer };
