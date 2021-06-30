import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const AdminApprove = props => (


    <tr>
        <td>{props.conference.conferenceName}</td>
        <td>{props.conference.description}</td>
        <td>{props.conference.venue}</td>
        <td>{props.conference.startDate.substring(0, 10)}</td>
        <td>
            <select className="form-select" aria-label="Default select example">
                <option value="1">Pending</option>
                <option value="2">Approve</option>
                <option value="3">Decline</option>
            </select>
        </td>
        <td>
            <div className="form-group">
                <a href="#" onClick={() => { props.onSubmit() }}>submit</a>
            </div>
        </td>
    </tr>

)

export default class adminApprove extends Component {
    constructor(props) {
        super(props);


        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            conferences: [],
            conferenceName: '',
            venue: '',
            startDate: new Date(),
            description: '',
        };
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



    conferenceList() {
        return this.state.conferences.map(currentconference => {
            return <AdminApprove conference={currentconference} />;
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const conferenceDetails = {
            conferenceName: this.state.conferenceName,
            venue: this.state.venue,
            startDate: this.state.startDate,
            description: this.state.description
        }

        console.log(conferenceDetails);

        axios.post('http://localhost:8087/conferenceDetails/update/' + this.props.match.params.id, conferenceDetails)
            .then(res => console.log(res.data));

        window.location = '/Allconference';
    }


//     render() {

//         return (
//             <div className="container">
//                 <h1>Conference Details</h1>
//                 <table className="table">
//                     <thead className="thead-light">
//                         <tr>
//                             <th>Username</th>
//                             <th>Description</th>
//                             <th>Duration</th>
//                             <th>Date</th>
//                             <th>Actions</th>
//                             <th>Submit</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {this.conferenceList()}
//                     </tbody>
//                 </table>

//             </div>
//         )
//     }
// }


render() {
    return (
        <div className="container">
          <h1>  <p class="text-secondary"> Conference Details</p> </h1>
            <br>
            </br>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Username</th>
                        <th scope="col">Description</th>
                        <th scope="col">Duration</th>
                        <th scope="col">Date</th>
                        <th scope="col">Action</th>
                        <th scope="col">Submit</th>
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


