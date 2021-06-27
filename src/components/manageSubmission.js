import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Space } from "antd";
import { Button } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

import moment from "moment";
import {
    Modal,
    notification,
    Form,
    Col,
    Row,
    Input,
    Select,
    DatePicker,
    Popconfirm,
    message,
  } from "antd";

const { Column, ColumnGroup } = Table;
const { confirm } = Modal;
const { Option } = Select;

class ManageSubmission extends Component {
    constructor(props) {
        super(props);
        this.state = {            
            visible: false,
            submissions: [],
            submission_id: "",
            selectedIndex: "",
            submission_type: "",
            submitted_date: "",
            submitter: "",
            document: "",
            status: "",
            selectedSubmission: "",
            selectedStatus: "",
          };
    }
    // this function done before the initial render of the component
    componentWillMount() {
        this.fetchUserData();
    }

    // this fucntion excuted after first render only on the client side
    componentDidMount() {
        document.title = "Conference API | Manage Submission";
    }
      
    // this function fetches the customer data from the .models db by using an api.
    /*
    fetchUserData = () => {
        fetch("http://127.0.0.1:8000/users/")
          .then((response) => response.json())
          .then((data) => this.setState({ submissions: data }));
    };
    */

    // deletes user data
    //deleteUser = () => {};

    // this fucntion is to show delete confirmation
    /*
    showDeleteConfirm = (data) => {
    
    confirm({
        title: "Are you sure delete this User?",
        icon: <ExclamationCircleOutlined />,
        content:
            "You are gonna delete " +
            data +
            " from the database. Once you click on the delete button, the deletion can not reverse back ⚠⚠",
        okText: "Yes",
        okType: "danger",
        cancelText: "No",
        // condition, if the user clicks ok. notification shows up.
        onOk() {          
            const args = {
            message: "Notification",
            description: "You have successfully deleted user " + data,
            duration: 0,
            };
            notification.open(args);
        },

        onCancel() {
            console.log("Cancel");
        },
        });
    };
    */

    onClose = () => {
        window.location.reload(false);
        this.setState(
        {
            visible: false,
        },
        () => console.log(this.state.visible)
        );
    };

    // this function is to fetch api url and update a customer row in db
    submitData = () => {
        const data = {
            status: this.state.selectedStatus,
            submission_id: this.state.selectedSubmission.submission_id,
        };

        console.log("data", data);
/*
        var url =
        "http://127.0.0.1:8000/user-update/" + this.state.selectedSubmission.submission_id + "/";
        console.log("data", url);

        fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            //converts JavaScript objects into strings.
            body: JSON.stringify(data),
        })
            .then((response) => {
            
            }).catch((err) => console.log(err));
            console.log(data);

            */
    };
  
    // this function retrieve values of whatever input it was called on
    updateData = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };
  
    // function to fetch api to delete customers
    /*
    confirm = (data) => {
        var url = "http://127.0.0.1:8000/user-delete/" + data + "/";

        fetch(url, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
            },
        })
            .then((response) => {
                if (response.status === 200) {
                console.log(data);
                const args = {
                    message: "Notification",
                    description: "You have successfully deleted user " + data,
                    duration: 1,
                };
                notification.open(args);

                this.fetchUserData();
            }
        })
        .catch((err) => console.log(err));
        console.log(data);
        
    };
    */

    // fucntion to cancel   
    cancel = (e) => {
        console.log(e);
        message.error("Click on No");
    };

    render() { 
        return ( 
            <div>
                <div className="row">
                <div className="col-lg-1 col-md-1 col-sm-1 col-xm-1">
                    </div>
                    <div className="col-lg-11 col-md-11 col-sm-11 col-xm-11">
                        
                        <div className="row">
                            <div className="col-lg-11" style={{backgroundColor:"", height: 100}}>
                                <h1 style={{paddingTop:50, paddingLeft:120}}>Manage Submissions</h1>
                            </div>
                            <div className="col-lg-1 col-md-1 col-sm-1 col-xm-1" style={{backgroundColor:"", height:100}}> 
                                <img src={logo_creative} style={{marginLeft: 50, marginTop:0, width:70, height:100 }}></img>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xm-12" style={{backgroundColor:"", height: 50, marginLeft:120, marginTop:50}}>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xm-12" style={{backgroundColor:"", height: 980}}>
                                            <form>
                                                <div className="row">   
                                                <Table dataSource={this.state.users} className="mt-5" style={{marginLeft: 0, paddingTop: 0, width:1150}}>
                                                    <Column title="Document" dataIndex="document" key="document" />
                                                    <Column title="Submission Id" dataIndex="submission_id" key="submission_id" />                                                    
                                                    <Column title="Submission Type" dataIndex="submission_type" key="submission_type" />                                                    
                                                    <Column title="Submitted Date" dataIndex="submitted_date" key="submitted_date" />                                                    
                                                    <Column title="Submitter" dataIndex="submitter" key="submitter" />
                                                    <Column title="Status" dataIndex="status" key="status" />         
                                                    <Column
                                                    title="Action"
                                                    key="action"
                                                    render={(text, record) => (
                                                        <Space size="middle">                                            
                                                        <Popconfirm
                                                            title="Are you sure to approve the submission?"
                                                            onConfirm={() => this.confirm(record.user_id)}
                                                            onCancel={this.cancel}
                                                            okText="Yes"
                                                            cancelText="No"
                                                        >
                                                            <a href="#">Approve</a>
                                                        </Popconfirm>
                                                        <Popconfirm
                                                            title="Are you sure to decline the submission?"
                                                            onConfirm={() => this.confirm(record.user_id)}
                                                            onCancel={this.cancel}
                                                            okText="Yes"
                                                            cancelText="No"
                                                        >
                                                            <a href="#">Decline</a>
                                                        </Popconfirm>
                                                        </Space>
                                                    )}
                                                    />
                                                </Table>

                                                </div>

                                                  
                                            </form>
                                      
                                </div>
   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default ManageSubmission;