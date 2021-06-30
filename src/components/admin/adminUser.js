import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const AdminUser = props => (
    <tr>
        <td>{props.adminUser.username}</td>
        <td>{props.adminUser.password}</td>
        <td>{props.adminUser.email}</td>
        <td>{props.adminUser.type}</td>
    </tr>
)

export default class AlladminUserList extends Component {
    constructor(props) {
        super(props);

        

        this.state = { adminUsers: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:8087/myadmin')
            .then(response => {
                this.setState({ adminUsers: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    adminUserList() {
        return this.state.adminUsers.map(currentadminUser => {
            return <AdminUser adminUser={currentadminUser} />;
        })
    }

    render() {
        return (
            <div className="container">
                <h1>  <p class="text-secondary"> User Details</p> </h1>
                <br>
                </br>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">User Name</th>
                            <th scope="col">Password</th>
                            <th scope="col">Email</th>
                            <th scope="col">Type</th>
                        </tr>
                    </thead>


                    <tbody>
                             {this.adminUserList()}
                    </tbody>
                </table>

            </div>
        )
    }
                                                                                                                                                           
}



