import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import ResearchTableRow from "./researchTableRow.js";

class ResearchApproval extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      researches: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8087/api/research")
      .then((res) => {
        this.setState({
          researches: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  DataTable() {
    return this.state.researches.map((res, i) => {
      return <ResearchTableRow obj={res} key={i} />;
    });
  }

  render() {
    return (
      <div className="container ">
        <br></br>
        <h1> Research Paper Submission List </h1>
        <span>
          {" "}
          <i> This page shows research paper submissions </i>{" "}
        </span>
        <br></br>
        <span>
          {" "}
          <i>
            {" "}
            Click the review submission button to view the submission and update
            its status{" "}
          </i>{" "}
        </span>
        <br></br>
        <br></br>
        <div className="table-wrapper">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Title</th>
                <th>Researcher Name</th>
                <th>Researcher Mobile Number</th>
                <th>Position</th>
                <th>Created At</th>
                <th>Document Name</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{this.DataTable()}</tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default ResearchApproval;
