import React from 'react';
import { Container } from '@mui/material';
import { titleModulCliente } from '../../common/text/TextTitle';

const ShowClient = () => {
  const props = {
    navigateLink: '/clientes',
    title: titleModulCliente.titleClienteDetail,
    text: titleModulCliente.descriptionClienteDetail,
  };
  return (
    <Container maxWidth="lg">
      <Container>
        <div>test</div>
      </Container>
    </Container>
  );
};

export default ShowClient;
