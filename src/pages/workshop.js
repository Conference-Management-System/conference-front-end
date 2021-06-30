import React, { useEffect, useState } from "react";
import {
  Card,
  Grid,
  Container,
  CardContent,
  Typography,
} from "@material-ui/core";
import { getAllWorkshop } from "../services/getAllWorkshop";

export default function workshop() {
  const PF = "localhost:8087/files/";
  const [workshop, setWorkshop] = useState([]);

  const setWorkshopDetails = async () => {
    const res = await getAllWorkshop();
    console.log(res);
    console.log(PF + res.document);
    setWorkshop(res);
  };

  useEffect(() => {
    setWorkshopDetails();
  }, []);
  return (
    <div>
      <Container>
        <Grid container justify="center" spacing={2}>
          <Grid item sm={3}></Grid>
          <Grid item sm={6}>
            {workshop.map((item) => (
              <Card>
                <CardContent>
                  <Typography variant="h5">{item.title}</Typography>
                  <Typography variant="body1">{item.mobile}</Typography>
                  <Typography variant="h6">{item.document}</Typography>
                  <a target="_blank" href={PF + item.document}>
                    view
                  </a>
                  <Typography variant="h6">{item.status}</Typography>
                </CardContent>
              </Card>
            ))}
          </Grid>
          <Grid item sm={3}></Grid>
        </Grid>
      </Container>
    </div>
  );
}