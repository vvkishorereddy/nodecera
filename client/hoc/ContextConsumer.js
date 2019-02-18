import React from "react";
import { AppConsumer } from "./Context";

export default function withContext(Component) {
  return function(props) {
    console.log("consumer HOC");
    return (
      <AppConsumer>
        {context => <Component {...props} context={context} />}
      </AppConsumer>
    );
  };
}
