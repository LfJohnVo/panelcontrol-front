import React from 'react';
import { Container } from '@mui/material';
import { titleModulCliente } from '../../common/text/TextTitle';
import { textBienvenida } from '../../common/text/TextCardWellcome';
import Bienvenida from '../../components/bienvenida/Bienvenida';
import TableCliente from '../../components/tables/clients';

const Client = () => {
  const props = {
    navigateLink: '/clientes',
    title: titleModulCliente.titleClienteList,
    text: titleModulCliente.descriptionClienteList,
    textCard: textBienvenida,
  };
  return (
    <Container maxWidth="lg">
      <Bienvenida {...props} />
      <Container>
        <TableCliente />
      </Container>
    </Container>
  );
};

export default Client;
