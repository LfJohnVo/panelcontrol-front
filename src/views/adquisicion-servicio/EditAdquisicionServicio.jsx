import React from 'react';
import { Container, Grid } from '@mui/material';
import FormEditAdquisicionServicio from '../../components/adquisicion-servicio/FormEditAdquisicionServicio';
import { titleModulAdquisicionServicio } from '../../common/text/TextTitle';
function EditAdquisicionServicio() {
  const props = {
    navigateLink: '/adquisiciones',
    title: titleModulAdquisicionServicio.titleAdquisicionServicioEdit,
    text: titleModulAdquisicionServicio.descriptionAdquisicionServicioEdit,
  };

  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={3} rowSpacing={0}>
          <Grid item xs={12} md={12} lg={12}>
            <FormEditAdquisicionServicio {...props} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default EditAdquisicionServicio;
