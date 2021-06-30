import React, { useState } from "react";
import { Grid, Container, Card, CardContent } from "@material-ui/core";
import { Link } from "react-router-dom";
import axiosInstance from "../services/axiosInstance";

export default function submitResearch() {
  const [title, setTitle] = useState("");
  const [researcher_name, setUserName] = useState("");
  const [mobile, setMobile] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newResearch = {
      title,
      researcher_name,
      mobile,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newResearch.document = filename;
      try {
        await axiosInstance.post("/upload", data);
      } catch (err) {
        console.log(err);
      }
    }

    try {
      const res = await axiosInstance.post("/research", newResearch);
      alert("form has been submitted successfully");
      console.log(res.data);
    } catch (err) {
      console.log(err);
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
                    <label htmlFor="title" className="form-label">
                      Research Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                      Researcher Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => {
                        setUserName(e.target.value);
                      }}
                    />
                  </div>

                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                      Mobile Number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => {
                        setMobile(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                      Research Document
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      onChange={(e) => {
                        setFile(e.target.files[0]);
                      }}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Submit
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
