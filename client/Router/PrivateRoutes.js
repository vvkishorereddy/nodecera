import React from "react";
import { Route, Redirect } from "react-router-dom";
import withContext from "../Context/ConsumerHOC";

function PrivateRoutes({ component: Component, ...rest }) {
  const { isLoggedIn } = rest.context;
  console.log(isLoggedIn, "ppp");
  return (
    <Route
      render={propData =>
        isLoggedIn ? (
          <Component {...rest} {...propData} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}

export default withContext(PrivateRoutes);
