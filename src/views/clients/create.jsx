import React from 'react';
import { Container } from '@mui/material';
import { titleModulCliente } from '../../common/text/TextTitle';
import { textBienvenida } from '../../common/text/TextCardWellcome';
import Bienvenida from '../../components/bienvenida/Bienvenida';
import CreateClientForm from '../../components/forms/client/create';

const CreateClient = () => {
  const props = {
    navigateLink: '/clientes',
    title: titleModulCliente.titleClienteCreate,
    text: titleModulCliente.descriptionClienteCreate,
    textCard: textBienvenida,
  };
  return (
    <Container maxWidth="lg">
      <Bienvenida {...props} />
      <Container>
        <CreateClientForm />
      </Container>
    </Container>
  );
};

export default CreateClient;
