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
      methodsList: { LoginUser: this.LoginUser, userLogOut: this.userLogOut }
    };
  }

  LoginUser = (email, password) => {
    axios
      .post("/api/login", {
        email,
        password
      })
      .then(response => {
        console.log(response, "response");
        const { data } = response;

        if (!data.data || !data.status) {
          localStorage.removeItem("access_token");
          this.setState(
            {
              ...this.state,
              isLoggedIn: false,
              loggedUser: {}
            },
            () => {
              this.props.history.push("/login");
            }
          );
        } else {
          localStorage.setItem("access_token", data.data.access_token);
          this.setState(
            {
              ...this.state,
              isLoggedIn: true,
              loggedUser: {
                user: "kishore",
                access_token: data.data.access_token
              }
            },
            () => {
              this.props.history.push("/dashboard");
            }
          );
        }
      });
  };

  userLogOut = () => {
    localStorage.removeItem("access_token");
    this.setState(
      {
        ...this.state,
        isLoggedIn: false,
        loggedUser: {}
      },
      () => {
        this.props.history.push("/login");
      }
    );
  };

  render() {
    console.log(this.props);
    return (
      <AppContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

const AppProvider = withRouter(AppProviderBasic);

export { AppContext, AppProvider, AppConsumer };
