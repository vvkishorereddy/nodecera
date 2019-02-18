import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

const AppContext = React.createContext();
const AppConsumer = AppContext.Consumer;

class AppProviderBasic extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      loggedUser: {},
      methodsList: {
        LoginUser: this.LoginUser,
        userLogOut: this.userLogOut,
        checkUser: this.checkUser,
        isLoggedIn: this.isLoggedIn
      }
    };
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

  render() {
    return (
      <AppContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

const AppProvider = withRouter(AppProviderBasic);

export { AppContext, AppProvider, AppConsumer };
