import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Conference = props => (
    <tr>
        <td>{props.conference.conferenceName}</td>
        <td>{props.conference.description}</td>
        <td>{props.conference.venue}</td>
        <td>{props.conference.startDate.substring(0, 10)}</td>
        <td>
            <Link to={"/editConference/" + props.conference._id}>edit</Link> | <a href="#" onClick={() => { props.deleteConference(props.conference._id) }}>delete</a>
        </td>
    </tr>
)

export default class AllconferenceList extends Component {
    constructor(props) {
        super(props);

        this.deleteConference = this.deleteConference.bind(this)

        this.state = { conferences: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:8087/conferenceDetails/')
            .then(response => {
                this.setState({ conferences: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteConference(id) {
        axios.delete('http://localhost:8087/conferenceDetails/' + id)
            .then(response => { console.log(response.data) });

        this.setState({
            conferences: this.state.conferences.filter(el => el._id !== id)
        })
    }

    conferenceList() {
        return this.state.conferences.map(currentconference => {
            return <Conference conference={currentconference} deleteConference={this.deleteConference} key={currentconference._id} />;
        })
    }


    render() {
        return (
            <div className="container">
                <h1>Allconference detals Conference details</h1>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.conferenceList()}
                    </tbody>
                </table>

            </div>
        )
    }
}
