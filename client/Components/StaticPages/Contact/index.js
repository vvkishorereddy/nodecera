import React, { Component, Fragment } from "react";
import TopBanner from "../TopBanner";
import ContactForm from "./ContactForm";

export default class Contact extends Component {
  render() {
    return (
      <Fragment>
        <TopBanner title="Contact Us" />
        <ContactForm />
      </Fragment>
    );
  }
}
