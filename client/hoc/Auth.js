import React from "react";

export default function Auth(Component) {
  return function(props) {
    console.log(props, "auth");
    return <Component {...props} />;
  };
}
