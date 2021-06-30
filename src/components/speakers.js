import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Avatar,
} from "@material-ui/core";

export default function speakers() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item sm={12}>
          <Typography
            style={{
              fontFamily: "sans-serif",
              fontWeight: "600",
              fontSize: "24px",
            }}
            color="grey"
          >
            Speakers
          </Typography>
        </Grid>
        <Grid item sm={3}></Grid>
        <Grid item sm={2}>
          <Card>
            <CardMedia
              style={{ height: "140px" }}
              image="https://marketinginsidergroup.com/wp-content/uploads/2020/01/speaker-4610564_1920.jpg"
            />
            {/* <Grid container justify="center">
              <Grid item sm={4}>
                <Avatar
                  style={{
                    width: "100px",
                    height: "100px",
                    alignItems: "center",
                    textAlign: "center",
                    marginTop: "10px",
                  }}
                  alt="Remy Sharp"
                  src="https://marketinginsidergroup.com/wp-content/uploads/2020/01/speaker-4610564_1920.jpg"
                />
              </Grid>
            </Grid> */}

            <CardContent>
              <Typography>Prof.John Willaims</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={2}>
          <Card>
            <CardMedia
              style={{ height: "140px" }}
              image="https://robert-murray.com/wp-content/uploads/2015/03/100x500-bob-talking.jpg"
            />
            <CardContent>
              <Typography>Prof.John Willaims</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={2}>
          <Card>
            <CardMedia
              style={{ height: "140px" }}
              image="https://media.istockphoto.com/photos/portrait-of-inspirational-innovative-speaker-talking-about-happiness-picture-id1226991415?k=6&m=1226991415&s=170667a&w=0&h=yPcZPMEN_gnsOW32xTogubdMX7vF84p7B0YKb83zCHk="
            />
            <CardContent>
              <Typography>Prof.John Willaims</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={3}></Grid>
      </Grid>
    </div>
  );
}
