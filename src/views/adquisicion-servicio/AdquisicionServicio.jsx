import React from 'react';
import { Container, Grid } from '@mui/material';
import { titleModulAdquisicionServicio } from '../../common/text/TextTitle';
import { textBienvenida } from '../../common/text/TextCardWellcome';
import Bienvenida from '../../components/bienvenida/Bienvenida';
import TableAdquisicionServicio from '../../components/adquisicion-servicio/TableAdquisicionServicio';

function AdquisicionServicio() {
  const props = {
    navigateLink: '/adquisiciones',
    title: titleModulAdquisicionServicio.titleAdquisicionServicioList,
    text: titleModulAdquisicionServicio.descriptionAdquisicionServicioList,
    textCard: textBienvenida,
  };
  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={2} rowSpacing={2}>
          <Bienvenida {...props} />
          <TableAdquisicionServicio />
        </Grid>
      </Container>
    </>
  );
}

export default AdquisicionServicio;
