import React from "react";
import { Container, Grid } from "@mui/material";
import FormAdquisicionServicio from "../../components/adquisicion-servicio/FormAdquisicionServicio";
import { titleModulAdquisicionServicio } from "../../common/text/TextTitle";

function AdquisicionServicioCreate() {
  const props = {
    navigateLink: "/adquisiciones",
    title: titleModulAdquisicionServicio.titleAdquisicionServicioCreate,
    text: titleModulAdquisicionServicio.descriptionAdquisicionServicioCreate,
  };
  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={3} rowSpacing={0}>
          <Grid item xs={12} md={12} lg={12}>
            <FormAdquisicionServicio {...props} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default AdquisicionServicioCreate;
