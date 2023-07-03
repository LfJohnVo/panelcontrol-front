import React from 'react';
import { Container } from '@mui/material';
import { titleModulCliente } from '../../common/text/TextTitle';
import { textBienvenida } from '../../common/text/TextCardWellcome';
import Bienvenida from '../../components/bienvenida/Bienvenida';
import UpdateClientForm from '../../components/forms/client/update';

const UpdateClient = () => {
  const props = {
    navigateLink: '/clientes',
    title: titleModulCliente.titleClienteEdit,
    text: titleModulCliente.descriptionClienteEdit,
    textCard: textBienvenida,
  };

  return (
    <Container maxWidth="lg">
      <Bienvenida {...props} />
      <Container>
        <UpdateClientForm />
      </Container>
    </Container>
  );
};

export default UpdateClient;
