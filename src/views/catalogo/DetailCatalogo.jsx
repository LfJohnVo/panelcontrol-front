import React from "react";
import { Grid, Container } from "@mui/material";
import CatalogoDetail from "../../components/catalogo/CatalogoDetail";
import { titleModulCatalogo } from "../../common/text/TextTitle";

function DetailCatalogo() {
  const props = {
    navigateLink: "/catalogo",
    title: titleModulCatalogo.titleCatalogoList,
    text: titleModulCatalogo.descriptionCatalogoList,
  };
  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={3} rowSpacing={0}>
          <Grid item xs={12} md={12} lg={12}>
            <CatalogoDetail {...props} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default DetailCatalogo;
