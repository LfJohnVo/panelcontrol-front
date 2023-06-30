import React from 'react';
import { Container, Grid } from '@mui/material';
import FormEditCliente from '../../components/cliente/FormEditCliente';
import { titleModulCliente } from '../../common/text/TextTitle';
function EditCliente() {
  const props = {
    navigateLink: '/clientes',
    title: titleModulCliente.titleClienteEdit,
    text: titleModulCliente.descriptionClienteEdit,
  };

  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={3} rowSpacing={0}>
          <Grid item xs={12} md={12} lg={12}>
            <FormEditCliente {...props} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default EditCliente;
