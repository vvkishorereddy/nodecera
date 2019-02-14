import React, { Component, Fragment } from "react";
import JobRow from "../JobRow";
import AddResume from "../AddResume";

const jobs = [
  {
    id: 1,
    title: "Project Manager",
    workType: "Full Time",
    location: "San Francisco, CA, US",
    category: "",
    salary: "$5,000 - $6,000",
    summary: "",
    responsibilities: "",
    requirements: "",
    experience: "Mid Level",
    company_name: "Dig File",
    company_logo: "images/job/8.png",
    company_description: "",
    company_address: "",
    company_phone: "",
    company_email: "",
    company_website: "",
    last_date: "",
    created_at: "Posted 23 hours ago"
  },
  {
    id: 2,
    title: "Project Manager",
    workType: "Full Time",
    location: "San Francisco, CA, US",
    category: "",
    salary: "$5,000 - $6,000",
    summary: "",
    responsibilities: "",
    requirements: "",
    experience: "Mid Level",
    company_name: "Dig File",
    company_logo: "images/job/4.png",
    company_description: "",
    company_address: "",
    company_phone: "",
    company_email: "",
    company_website: "",
    last_date: "",
    created_at: "Posted 23 hours ago"
  },
  {
    id: 3,
    title: "Project Manager",
    workType: "Full Time",
    location: "San Francisco, CA, US",
    category: "",
    salary: "$5,000 - $6,000",
    summary: "",
    responsibilities: "",
    requirements: "",
    experience: "Mid Level",
    company_name: "Dig File",
    company_logo: "images/job/1.png",
    company_description: "",
    company_address: "",
    company_phone: "",
    company_email: "",
    company_website: "",
    last_date: "",
    created_at: "Posted 23 hours ago"
  },
  {
    id: 4,
    title: "Project Manager",
    workType: "Full Time",
    location: "San Francisco, CA, US",
    category: "",
    salary: "$5,000 - $6,000",
    summary: "",
    responsibilities: "",
    requirements: "",
    experience: "Mid Level",
    company_name: "Dig File",
    company_logo: "images/job/1.png",
    company_description: "",
    company_address: "",
    company_phone: "",
    company_email: "",
    company_website: "",
    last_date: "",
    created_at: "Posted 23 hours ago"
  }
];

export default class FourColumn extends Component {
  state = {
    jobs: []
  };

  componentDidMount() {
    this.setState({
      ...this.state,
      jobs: jobs
    });
  }

  render() {
    const { jobs } = this.state;

    return (
      <Fragment>
        <div className="row">
          {jobs.map(data => (
            <JobRow job={data} key={data.id} />
          ))}
        </div>

        <AddResume />

        <div className="row">
          {jobs.map(data => (
            <JobRow job={data} key={data.id} />
          ))}
        </div>
      </Fragment>
    );
  }
}
