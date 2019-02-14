import React, { Component } from "react";
import JobRow from "./JobRow";

const popularJobs = [
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
    company_logo: "images/job/2.png",
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
    company_logo: "images/job/3.png",
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

export default class PopularJobs extends Component {
  state = {
    popularJobs: []
  };

  componentDidMount() {
    this.setState({
      ...this.state,
      popularJobs: popularJobs
    });
  }

  render() {
    const { popularJobs } = this.state;

    return (
      <div className="row">
        {popularJobs.map(data => (
          <JobRow job={data} key={data.id} />
        ))}
      </div>
    );
  }
}