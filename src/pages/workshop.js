import React, { useEffect, useState } from "react";
import {
  Card,
  Grid,
  Container,
  CardContent,
  Typography,
  Chip,
} from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { getAllWorkshop } from "../services/getAllWorkshop";
import NavBar from "../components/navBar";

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
      <NavBar />
      <img
        style={{ height: "400px", width: "100%" }}
        src="http://www.pngmagic.com/product_images/purple%20wallpaper%201920x1080.jpg"
        alt="/"
      />
      <Container style={{ paddingTop: "30px" }}>
        <Grid item sm={12}></Grid>
        {workshop.map((item) => (
          <div>
            <Grid container justify="center" spacing={3}>
              <Grid item sm={6}>
                <Card>
                  <CardContent>
                    <Grid container>
                      <Grid item sm={10}>
                        <Typography variant="body1">{item.title}</Typography>
                        <Typography variant="body1">{item.mobile}</Typography>
                        <Typography variant="body1">{item.document}</Typography>
                        <a target="_blank" href={PF + item.document}>
                          <VisibilityIcon style={{ color: "#9400b3" }} />
                        </a>
                      </Grid>
                      <Grid item sm={2}>
                        <Typography variant="body1">
                          {item.status === "Approved" ? (
                            <Chip
                              style={{ backgroundColor: "green" }}
                              size="small"
                              label="approved"
                            />
                          ) : null}

                          {item.status === "Declined" ? (
                            <Chip
                              style={{ backgroundColor: "#cc1100" }}
                              size="small"
                              label="declined"
                            />
                          ) : null}
                          {item.status === "pending" ? (
                            <Chip
                              style={{ backgroundColor: "#f5d730" }}
                              size="small"
                              label="pending"
                            />
                          ) : null}
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </div>
        ))}
      </Container>
    </div>
  );
}
