import React from 'react';
import { Container, Grid } from '@mui/material';
import FormCliente from '../../components/cliente/FormCliente';
import { titleModulCliente } from '../../common/text/TextTitle';

function ClienteCreate() {
  const props = {
    navigateLink: '/clientes',
    title: titleModulCliente.titleClienteCreate,
    text: titleModulCliente.descriptionClienteCreate,
  };
  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={3} rowSpacing={0}>
          <Grid item xs={12} md={12} lg={12}>
            <FormCliente {...props} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default ClienteCreate;
