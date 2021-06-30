import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default class ResearchTableRow extends Component {

    render() {
        return (
            <tr>
                <td>{this.props.obj.title}</td>
                <td>{this.props.obj.username}</td>
                <td>{this.props.obj.mobile}</td> 
                <td>{this.props.obj.position}</td>         
                <td>{this.props.obj.createdAt}</td>  
                <td>{this.props.obj.document}</td>  
                <td>{this.props.obj.status}</td>  
                <td>
                    <Link className="update-link" to={"/research-review/" + this.props.obj._id}>
                        <button type="button" class="btn btn-primary">
                              Review Submission 
                        </button>
                    </Link>                    
                </td>      
            </tr>
        );
    }
}