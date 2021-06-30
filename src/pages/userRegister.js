import React, { useState } from "react";
import { Grid, Container, Card, CardContent } from "@material-ui/core";
import { Link } from "react-router-dom";
import axios from "axios";
import axiosInstance from "../services/axiosInstance";

export default function userRegister() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axiosInstance.post("/user/register", {
        username,
        email,
        password,
        type,
      });
      console.log(res.data) && alert("registered successfully");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div>
      <Container>
        <Grid container justify="center">
          <Grid item sm={4}></Grid>
          <Grid style={{ paddingTop: "100px" }} item sm={4}>
            <Card>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                  {/* <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                      User type
                    </label>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                      value={userType}
                    >
                      <option selected>Select Type</option>
                      <option value="researcher">Researcher</option>
                      <option value="workshop Conductor">
                        workshop Conductor
                      </option>
                      <option value="Attendee">Attendee</option>
                    </select>
                  </div> */}
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                      User Type
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => {
                        setType(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Register
                  </button>
                </form>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={4}></Grid>
        </Grid>
      </Container>
    </div>
  );
}
