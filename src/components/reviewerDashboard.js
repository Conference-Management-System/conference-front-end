import React, { Component } from 'react';
import axios from 'axios';

class ReviewerDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            researches: [],            
            workshops: [],
            status: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8087/api/research')
          .then(res => {
            this.setState({
              researches: res.data
            });
          })
          .catch((error) => {
            console.log(error);
        })

        axios.get('http://localhost:8087/api/workshop')
          .then(res => {
            this.setState({
              workshops: res.data
            });
          })
          .catch((error) => {
            console.log(error);
        })
    }    

    render() { 
        return ( 
            <div className="container col-sm-5">
                <br></br>
                <h1> Reviewer Dashboard </h1>
                <span> <i> This is the homepage of the reviewer dashboard </i> </span><br></br>
                <br></br><br></br>

                <div class="card border-dark mb-3"> 
                    <div class="card-header"> Summary </div>
                </div>

                <div class="container">
                    <div class="row row-cols-1">
                        <div class="card text-white bg-primary mb-3"> 
                            <div class="card-body"> 
                                <h5 class="card-title">Total Research Paper Submissions</h5>
                                <p class="card-text"> {this.state.researches.length}  </p>
                            </div>
                        </div>
                        <div class="card text-white bg-success mb-3"> 
                            <div class="card-body"> 
                                <h5 class="card-title">Total Workshop Details Submissions</h5>
                                <p class="card-text"> {this.state.workshops.length}  </p>
                            </div>
                        </div><br></br><br></br>
                    </div>
                </div>
               
            </div>
        );
    }
}
 
export default ReviewerDashboard;