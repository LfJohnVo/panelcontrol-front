import React from 'react';
import { Grid, Container } from '@mui/material';
import ClienteDetail from '../../components/cliente/ClienteDetail';
import { titleModulCliente } from '../../common/text/TextTitle';
import TitleModul from '../../components/bienvenida/TitleModul';

function DetailCliente() {
  const props = {
    navigateLink: '/clientes',
    title: titleModulCliente.titleClienteDetail,
    text: titleModulCliente.descriptionClienteDetail,
  };
  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={3} rowSpacing={0}>
          <Grid item xs={12} md={12} lg={12}>
            <ClienteDetail {...props} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default DetailCliente;
