import React from 'react';
import { Container } from '@mui/material';
import { titleModulAdquisicionServicio } from '../../common/text/TextTitle';
import { textBienvenida } from '../../common/text/TextCardWellcome';
import CreateAcquisitionForm from '../../components/forms/acquisition/create';

const AcquisitionCreate = () => {
  const props = {
    navigateLink: '/adquisiciones',
    title: titleModulAdquisicionServicio.titleAdquisicionServicioCreate,
    text: titleModulAdquisicionServicio.descriptionAdquisicionServicioCreate,
    textCard: textBienvenida,
  };
  return (
    <Container maxWidth="lg">
      <Bienvenida {...props} />
      <Container>
        <CreateAcquisitionForm />
      </Container>
    </Container>
  );
};

export default AcquisitionCreate;
