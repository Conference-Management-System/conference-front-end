import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

export default function conCard() {
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
            Conference details 
          </Typography>
        </Grid>
        <Grid item sm={3}></Grid>
        <Grid item sm={2}>
          <Card>
           
            <CardContent>
              <Typography>Prof.John Willaims</Typography>
            </CardContent>
            <CardContent>
              <Typography>Prof.John Willaims</Typography>
            </CardContent>
            <CardContent>
              <Typography>Prof.John Willaims</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={2}>
          <Card>
    
          <CardContent>
              <Typography>Prof.John Willaims</Typography>
            </CardContent>
            <CardContent>
              <Typography>Prof.John Willaims</Typography>
            </CardContent>
            <CardContent>
              <Typography>Prof.John Willaims</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={2}>
          <Card>
           
          <CardContent>
              <Typography>Prof.John Willaims</Typography>
            </CardContent>
            <CardContent>
              <Typography>Prof.John Willaims</Typography>
            </CardContent>
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
