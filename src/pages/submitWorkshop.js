import React, { useState, useContext } from "react";
import {
  Grid,
  Container,
  Card,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import axiosInstance from "../services/axiosInstance";
import { Context } from "../../src/context/context";

export default function submitResearch() {
  const [title, setTitle] = useState("");
  const { user } = useContext(Context);
  const [mobile, setMobile] = useState("");
  const [duration, setDuration] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newWorkshop = {
      title,
      username: user.username,
      duration,
      mobile,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newWorkshop.document = filename;
      try {
        await axiosInstance.post("/upload", data);
      } catch (err) {
        console.log(err);
      }
    }

    try {
      const res = await axiosInstance.post("/workshop", newWorkshop);
      alert("form has been submitted successfully");
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <img
        style={{ height: "400px", width: "100%" }}
        src="http://www.pngmagic.com/product_images/purple%20wallpaper%201920x1080.jpg"
        alt="/"
      />
      <Container>
        <Grid container>
          <Grid item sm={6}>
            <Grid style={{ paddingTop: "20px" }} item sm={10}>
              <Card>
                <CardContent>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="title" className="form-label">
                        Workshop Title
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
                        Duration
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        onChange={(e) => {
                          setDuration(e.target.value);
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
                        Workshop Document
                      </label>
                      <input
                        type="file"
                        accept=".ppt"
                        className="form-control"
                        onChange={(e) => {
                          setFile(e.target.files[0]);
                        }}
                      />
                    </div>

                    <Button
                      type="submit"
                      size="small"
                      style={{ backgroundColor: "#9400b3", color: "white" }}
                    >
                      Submit
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid item sm={6}>
            <Grid container spacing={2}>
              <Grid style={{ paddingTop: "30px" }} item sm={8}>
                <Typography
                  style={{
                    fontFamily: "sans-serif",
                    fontWeight: "600",
                    fontSize: "24px",
                  }}
                >
                  Call for Workshop
                </Typography>
              </Grid>
              <Grid item sm={4}></Grid>
              <Grid item sm={12}>
                <Typography
                  style={{
                    color: "GrayText",
                    fontWeight: "400",
                    fontSize: "14px",
                  }}
                >
                  In addition to exciting technical symposia, tutorials, IEEE
                  ICAC 2021 will feature a series of 3 hours of workshop. We
                  invite the submission of workshop proposals. The aim of the
                  conference workshops is to emphasize emerging topics not
                  specifically covered in the conference. Workshops should
                  highlight current topics related to technical and business
                  issues in communications and networking, and should include a
                  mix of regular papers, invited presentations, and panels that
                  encourage the participation of attendees in active discussion.
                </Typography>
              </Grid>
              <Grid style={{ paddingTop: "30px" }} item sm={12}>
                <Typography
                  style={{
                    fontFamily: "sans-serif",
                    fontWeight: "600",
                    fontSize: "24px",
                  }}
                >
                  WORKSHOP PROPOSAL TEMPLATE
                </Typography>
              </Grid>
              <Grid item sm={12}>
                <a
                  target="_blank"
                  href="http://www.africau.edu/images/default/sample.pdf"
                  download
                >
                  <Button
                    style={{ backgroundColor: "#9400b3", color: "white" }}
                  >
                    Download
                  </Button>
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
