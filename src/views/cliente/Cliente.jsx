import React from "react";
import { Container, Grid } from "@mui/material";
import { titleModulCliente } from "../../common/text/TextTitle";
import { textBienvenida } from "../../common/text/TextCardWellcome";
import Bienvenida from "../../components/bienvenida/Bienvenida";
import TableCliente from "../../components/cliente/TableCliente";

function Cliente() {
  const props = {
    navigateLink: "/clientes",
    title: titleModulCliente.titleClienteList,
    text: titleModulCliente.descriptionClienteList,
    textCard: textBienvenida,
  };
  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={2} rowSpacing={2}>
          <Bienvenida {...props} />
          <TableCliente />
        </Grid>
      </Container>
    </>
  );
}

export default Cliente;
