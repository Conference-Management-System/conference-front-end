import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default class WorkshopTableRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.obj.title}</td>
        <td>{this.props.obj.username}</td>
        <td>{this.props.obj.mobile}</td>
        <td>{this.props.obj.duration}</td>
        <td>{this.props.obj.description}</td>
        <td>{this.props.obj.createdAt}</td>
        <td>{this.props.obj.document}</td>
        <td>{this.props.obj.status}</td>
        <td>
          <Link
            className="update-link"
            to={"/workshop-review/" + this.props.obj._id}
          >
            <button type="button" class="btn btn-primary">
              Review Submission
            </button>
          </Link>
        </td>
      </tr>
    );
  }
}
