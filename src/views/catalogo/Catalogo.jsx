import React from "react";
import { Container, Grid } from "@mui/material";
import { titleModulCatalogo } from "../../common/text/TextTitle";
import { textBienvenida } from "../../common/text/TextCardWellcome";
import Bienvenida from "../../components/bienvenida/Bienvenida";
import TableCatalogo from "../../components/catalogo/TableCatalogo";

function Catalogo() {
  const props = {
    navigateLink: "/catalogo",
    title: titleModulCatalogo.titleCatalogoList,
    text: titleModulCatalogo.descriptionCatalogoList,
    textCard: textBienvenida,
  };
  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={2} rowSpacing={2}>
          <Bienvenida {...props} />
          <TableCatalogo />
        </Grid>
      </Container>
    </>
  );
}

export default Catalogo;
