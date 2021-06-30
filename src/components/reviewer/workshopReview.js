import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import NavBar from "./navbar";

export default class WorkshopReview extends React.Component {
  constructor(props) {
    super(props);
    this.deleteWorkshop = this.deleteWorkshop.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      status: "",
      document: "",
      pf: "localhost:8087/files/",
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8087/api/workshop/" + this.props.match.params.id)
      .then((res) => {
        this.setState({
          status: res.data.status,
          document: res.data.document,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeStatus(e) {
    this.setState({ status: e.target.value });
  }

  deleteWorkshop() {
    axios
      .delete(
        "http://localhost:8087/api/workshop/" + this.props.match.params.id
      )
      .then((res) => {
        alert("Workshop details successfully deleted!");
        this.props.history.push("/workshop");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onSubmit(e) {
    e.preventDefault();

    const workshopObject = {
      status: this.state.status,
    };

    axios
      .put(
        "http://localhost:8087/api/workshop/" + this.props.match.params.id,
        workshopObject
      )
      .then((res) => {
        console.log(res.data);
        console.log("Workshop details successfully updated");
        alert("Workshop details successfully updated");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <NavBar />

        <div className="container col-sm-4">
          <br></br>
          <h1> Workshop details Review </h1>
          <span>
            {" "}
            <i> This page reviews workshop details submissions </i>{" "}
          </span>
          <br></br>
          <br></br>
          <div className="card text-white bg-dark  mb-3 text-center">
            <p></p>
            <b5> Document Name: </b5>
            <h4> {this.state.document} </h4> <br></br>
            <a target="_blank" href={this.state.pf + this.state.document}>
              View Document
            </a>
            <br></br>
          </div>

          <div className="form-wrapper">
            <Form onSubmit={this.onSubmit}>
              <Form.Group controlId="Status">
                <Form.Label>Select status of submission:</Form.Label>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  onChange={this.onChangeStatus}
                >
                  <option selected>Open this status menu</option>
                  <option value="Approved">Approved</option>
                  <option value="Declined">Declined</option>
                </select>
              </Form.Group>
              <br></br>
              <Button variant="warning" size="m" block="block" type="submit">
                Update Status
              </Button>
            </Form>
            <p></p>
            <Button onClick={this.deleteWorkshop} size="m" variant="danger">
              Delete
            </Button>

            <p></p>
            <p></p>
            <Link to="/workshop">
              <button type="button" class="btn btn-success">
                Go back
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
