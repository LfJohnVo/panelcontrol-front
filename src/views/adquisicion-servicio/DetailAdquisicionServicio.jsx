import React from 'react';
import { Grid, Container } from '@mui/material';
import AdquisicionServicioDetail from '../../components/adquisicion-servicio/AdquisicionServicioDetail';
import { titleModulAdquisicionServicio } from '../../common/text/TextTitle';

function DetailAdquisicionServicio() {
  const props = {
    navigateLink: '/adquisiciones',
    title: titleModulAdquisicionServicio.titleAdquisicionServicioDetail,
    text: titleModulAdquisicionServicio.descriptionAdquisicionServicioDetail,
  };
  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={3} rowSpacing={0}>
          <Grid item xs={12} md={12} lg={12}>
            <AdquisicionServicioDetail {...props} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default DetailAdquisicionServicio;
