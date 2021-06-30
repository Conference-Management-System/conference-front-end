import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import WorkshopTableRow from "./workshopTableRow.js";

class WorkshopApproval extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workshops: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8087/api/workshop")
      .then((res) => {
        this.setState({
          workshops: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  DataTable() {
    return this.state.workshops.map((res, i) => {
      return <WorkshopTableRow obj={res} key={i} />;
    });
  }

  render() {
    return (
      <div className="container ">
        <br></br>
        <h1> Workshop Details Submission List </h1>
        <span>
          {" "}
          <i> This page shows workshop details submissions </i>{" "}
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
                <th>Conducter Name</th>
                <th>Conducter Mobile Number</th>
                <th>Duration</th>
                <th>Description</th>
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

export default WorkshopApproval;
