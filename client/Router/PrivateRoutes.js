import React from "react";
import { Route, Redirect } from "react-router-dom";
import withContext from "../hoc/ContextConsumer";

function PrivateRoutes({ component: Component, ...rest }) {
  const { isLogged } = rest.context;
  console.log(isLogged, "private");
  return (
    <Route
      render={propData =>
        isLogged ? (
          <Component {...rest} {...propData} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}

export default withContext(PrivateRoutes);
