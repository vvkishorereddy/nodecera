import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

const AppContext = React.createContext();
const AppConsumer = AppContext.Consumer;

class AppProviderBasic extends Component {
  constructor() {
    console.log("AppProvider contructor");
    super();
    this.state = {
      isLoading: false,
      isLoggedIn: false,
      jobs: [],
      hotJobs: [],
      popularJobs: [],
      recentJobs: [],
      similarJobs: [],
      jobsDetails: {},
      loggedUser: {}
    };
  }

  componentDidMount() {
    console.log("AppProvider did mount");
  }

  //Auth Functions

  LoginUser = (email, password) => {
    axios
      .post("/api/login", {
        email,
        password
      })
      .then(response => {
        const { data } = response;

        if (!data.data || !data.status) {
          this.removeToken();
          this.setState(
            {
              ...this.state,
              isLoggedIn: false,
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
              isLoggedIn: true,
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
        isLoggedIn: false,
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
        isLoggedIn: true
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
    axios.get("/api/jobs").then(res => {
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

  render() {
    console.log("AppProvider render");
    const methodsList = {
      LoginUser: this.LoginUser,
      userLogOut: this.userLogOut,
      checkUser: this.checkUser,
      isLoggedIn: this.isLoggedIn,
      fetchJobs: this.fetchJobs
    };
    return (
      <AppContext.Provider value={{ ...this.state, ...methodsList }}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

const AppProvider = withRouter(AppProviderBasic);

export { AppContext, AppProvider, AppConsumer };
