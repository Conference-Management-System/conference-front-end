import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';

//import "react-datepicker/dist/react-datepicker.css";


export default class ConferenceDetails extends Component {
    constructor(props) {
        super(props);
        this.onChangeConferenceName = this.onChangeConferenceName.bind(this);
        this.onChangeVenue = this.onChangeVenue.bind(this);
        this.onChangeStartDate = this.onChangeStartDate.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            conferenceName: '',
            venue: '',
            startDate: new Date(),
            description: '',
        }
    }


    onChangeConferenceName(e) {
        this.setState({
            conferenceName: e.target.value
        });
    }

    onChangeVenue(e) {
        this.setState({
            venue: e.target.value
        });
    }

    onChangeStartDate(startDate) {
        this.setState({
            startDate: startDate
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
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

        axios.post('http://localhost:8087/conferenceDetails/add', conferenceDetails)
            .then(res => console.log(res.data));

        window.location = '/Allconference';

        // this.setState({
        //     conferenceName: '',
        //     venue: '',
        //     startDate: '',
        //     description: '',

        // });
    }

    render() {
        return (
            <div className="">
                <div className="container">
                    <br></br> <br></br><br></br>
                    <h1>Create Conference details</h1>
                    <br></br> <br></br><br></br>
                    <form onSubmit={this.onSubmit}>

                        <div className="form-group row">
                            <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label lb-lg">Conference name</label>
                            <div className="col-sm-10">
                                <input type="name"
                                    className="form-control form-control-lg"
                                    id="colFormLabelSm"
                                    value={this.state.conferenceName}
                                    onChange={this.onChangeConferenceName}
                                />
                                <small id="emailHelp" className="form-text text-muted">select the suitable name for your heading .</small>
                                <br></br><br></br>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label lb-lg">Venue</label>
                            <div className="col-sm-10 col-md-4 mb-3">
                                <input type="text"
                                    className="form-control form-control-lg"
                                    id="colFormLabelSm"
                                    value={this.state.venue}
                                    onChange={this.onChangeVenue}
                                />
                                <small id="emailHelp" className="form-text text-muted">The country where the Conference will be held .</small>
                                <br></br><br></br>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label lb-lg">Description</label>
                            <div className="col-sm-10 col-md-4 mb-3">
                                <input type="text"
                                    className="form-control form-control-lg"
                                    id="colFormLabelSm"
                                    value={this.state.description}
                                    onChange={this.onChangeDescription} />
                                <br></br>
                            </div>
                        </div>



                        <div className="form-group row">
                            <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label lb-lg">Starting Date</label>
                            <div className="col-sm-10 col-md-4 mb-3">
                                <DatePicker
                                    selected={this.state.startDate}
                                    onChange={this.onChangeStartDate}
                                />
                            </div>
                        </div>
                        <br></br>
                        <div className="form-group">
                            <input type="submit" value="Create Conference Details" className="btn btn-primary" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}