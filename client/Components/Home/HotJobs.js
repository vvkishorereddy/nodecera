import React, { Component } from "react";
import JobRow from "./JobRow";

const hotJobs = [
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

export default class HotJobs extends Component {
  state = {
    hotJobs: []
  };

  componentDidMount() {
    this.setState({
      ...this.state,
      hotJobs: hotJobs
    });
  }

  render() {
    const { hotJobs } = this.state;

    return (
      <div className="row">
        {hotJobs.map(data => {
          return <JobRow job={data} key={data.id} />;
        })}
      </div>
    );
  }
}
