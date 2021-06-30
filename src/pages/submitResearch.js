import React, { useState, useContext } from "react";
import {
  Grid,
  Container,
  Card,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import axiosInstance from "../services/axiosInstance";
import { Context } from "../../src/context/context";
import NavBar from "../components/navBar";

export default function submitResearch() {
  const [title, setTitle] = useState("");
  const { user } = useContext(Context);
  const [mobile, setMobile] = useState("");
  const [position, setPosition] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newResearch = {
      title,
      username: user.username,
      mobile,
      position,
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
      <NavBar />
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
                      <label for="exampleInputPassword1" className="form-label">
                        Position
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        onChange={(e) => {
                          setPosition(e.target.value);
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
                  Call for Research papers
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
                  The 2021 International Conference on Advancements in Computing
                  (ICAC 2021) will be held in Sri Lanka from 9th to 11th
                  December 2021. The ICAC 2021 is themed “Empowering the society
                  through innovation and invention.” The conference organizers
                  invite contributions from diverse computing areas including
                  Computer Engineering, Computer Science, Information Systems,
                  Information Technology and Software Engineering, but not
                  limited to. ICAC 2021 will include attractive workshops and
                  industry programs aimed at practitioners, with keynotes and
                  panels from both local and international researchers.
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
                  Research Proposal Template
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
