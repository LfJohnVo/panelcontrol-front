import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import { useRouteError } from "react-router-dom";
import imgError from "../../assets/error/Grupo1427.png";

export default function Error() {
  const error = useRouteError();
  return (
    <>
      <Grid
        item
        md={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            p: "61px 51px 64px 27px",
            display: "flex",
            flexDirection: "row",
            height: "auto",
            background: "#FFFFF",
            mb: "125px",
          }}
        >
          <Grid
            container
            component="form"
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={3}
          >
            <Grid
              container
              item
              xs={12}
              sm={12}
              md={6}
              spacing={3}
              direction="column"
              justifyContent="flex-start"
              alignItems="strech"
            >
              <Grid item md={6}>
                <Typography variant="h1" component="h1" color={"#86A4CB"}>
                  Error
                </Typography>
              </Grid>
              <Grid item md={6}>
                <Typography
                  variant="h1"
                  component="h1"
                  fontSize={"18px"}
                  color={"#86A4CB"}
                >
                  {error.message}
                </Typography>
              </Grid>
            </Grid>

            <Grid
              container
              item
              xs={12}
              sm={12}
              md={6}
              spacing={3}
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Grid
                container
                item
                xs={12}
                sm={12}
                md={6}
                direction="column"
                justifyContent="flex-start"
                alignItems="strech"
              >
                <Grid item xs={12} sm={12}>
                  <img src={imgError}></img>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      {/* <p>{error.message}</p> */}
      {}
    </>
  );
}
