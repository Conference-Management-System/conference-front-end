import React from "react";
import NavBar from "../components/navBar";
import Carousal from "../components/carousal";
import About from "../components/about";
import Speaker from "../components/speakers";
import { Grid, Container, Card, CardContent } from "@material-ui/core";

export default function home() {
  return (
    <div>
      <NavBar />

      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <img
            style={{ height: "600px", width: "100%" }}
            src="https://www.teahub.io/photos/full/103-1030189_serviceimg-machine-learning-desktop-background.jpg"
            alt="/"
          />
        </Grid>
        <Grid
          style={{ textAlign: "center", paddingTop: "100px" }}
          item
          xs={12}
          sm={12}
        >
          <About />
        </Grid>
        <Grid
          style={{
            textAlign: "center",
            alignItems: "center",
            paddingTop: "100px",
          }}
          item
          xs={12}
          sm={12}
        >
          <Speaker />
        </Grid>
      </Grid>
    </div>
  );
}
