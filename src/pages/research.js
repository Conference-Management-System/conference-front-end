import React, { useEffect, useState } from "react";
import {
  Card,
  Grid,
  Container,
  CardContent,
  Typography,
} from "@material-ui/core";
import { getAllResearch } from "../services/getAllResearch";

export default function workshop() {
  const PF = "localhost:8087/files/";

  const [research, setResearch] = useState([]);

  const setResearchDetails = async () => {
    const res = await getAllResearch();
    console.log(res);
    console.log(PF + res.document);

    setResearch(res);
  };

  useEffect(() => {
    setResearchDetails();
  }, []);
  return (
    <div>
      <Container>
        <Grid container justify="center" spacing={2}>
          <Grid item sm={3}></Grid>
          <Grid item sm={6}>
            {research.map((item) => (
              <Card>
                <CardContent>
                  <Typography variant="h5">{item.title}</Typography>
                  <Typography variant="body1">{item.mobile}</Typography>
                  <Typography variant="body2">{item.document}</Typography>
                  <a target="_blank" href={PF + item.document}>
                    view
                  </a>
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
