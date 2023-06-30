import React from 'react';
import { Container } from '@mui/material';
import FormCliente from '../../components/cliente/FormCliente';
import { titleModulCliente } from '../../common/text/TextTitle';
import Bienvenida from '../../components/bienvenida/Bienvenida';

const CreateClient = () => {
  const props = {
    navigateLink: '/clientes',
    title: titleModulCliente.titleClienteCreate,
    text: titleModulCliente.descriptionClienteCreate,
  };
  return (
    <Container maxWidth="lg">
      <Bienvenida {...props} />
      <Container>
        <FormCliente {...props} />
      </Container>
    </Container>
  );
};

export default CreateClient;
