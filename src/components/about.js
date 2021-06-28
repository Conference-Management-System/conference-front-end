import React from "react";
import { Grid, Container, Typography } from "@material-ui/core";

export default function about() {
  return (
    <div>
      <Typography
        style={{
          fontFamily: "sans-serif",
          fontWeight: "600",
          fontSize: "24px",
        }}
        color="grey"
      >
        About
      </Typography>

      <Grid container>
        <Grid item sm={3}></Grid>
        <Grid item sm={6}>
          <Typography
            style={{
              fontFamily: "sans-serif",
              fontWeight: "400",
              fontSize: "14px",
            }}
            color="grey"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            interdum est lacus, vitae sollicitudin tortor sodales nec. Phasellus
            consectetur lacus eu fringilla gravida. Nam magna felis, maximus
            eget lectus nec, tempus efficitur nibh. Etiam vel lacus consequat,
            vulputate lectus a, finibus est. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos. Integer
            suscipit ex semper nunc pretium, at porta tortor dignissim.
            Phasellus at pellentesque urna. Quisque aliquam vel elit a euismod.
            Proin vestibulum sit amet purus non cursus. Suspendisse potenti. Ut
            mi nibh, imperdiet in elit id, mattis finibus lectus. Praesent
            venenatis, arcu quis consectetur gravida, nisl felis mollis erat, eu
            commodo nibh risus sed nisl. Sed nec tortor molestie, dictum sapien
            in, placerat ipsum.
          </Typography>
        </Grid>
        <Grid item sm={3}></Grid>
      </Grid>
    </div>
  );
}
