import React from "react";

export default function AlertInfoComponent(props) {
  return (
    <div className={`alert alert-${props.type} alert-dismissible`}>
      <a href="#" className="close" data-dismiss="alert" aria-label="close">
        &times;
      </a>
      {props.message}
    </div>
  );
}
