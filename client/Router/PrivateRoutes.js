import React from "react";
import { Route, Redirect } from "react-router-dom";
import withContext from "../hoc/ContextConsumer";

function PrivateRoutes({ component: Component, ...rest }) {
  const { isLoggedIn } = rest.context;
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
