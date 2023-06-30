import React from 'react';
import { Container } from '@mui/material';
import FormEditCliente from '../../components/cliente/FormEditCliente';
import { titleModulCliente } from '../../common/text/TextTitle';
import { textBienvenida } from '../../common/text/TextCardWellcome';
import Bienvenida from '../../components/bienvenida/Bienvenida';

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
        <FormEditCliente {...props} />
      </Container>
    </Container>
  );
};

export default UpdateClient;
