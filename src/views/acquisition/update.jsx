import React from 'react';
import { Container } from '@mui/material';
import UpdateAcquistionForm from '../../components/forms/acquisition/update';
import { titleModulAdquisicionServicio } from '../../common/text/TextTitle';
import { textBienvenida } from '../../common/text/TextCardWellcome';
import Bienvenida from '../../components/bienvenida/Bienvenida';

const UpdateAcquisition = () => {
  const props = {
    navigateLink: '/adquisiciones',
    title: titleModulAdquisicionServicio.titleAdquisicionServicioEdit,
    text: titleModulAdquisicionServicio.descriptionAdquisicionServicioEdit,
    textCard: textBienvenida,
  };

  return (
    <Container maxWidth="lg">
      <Bienvenida {...props} />
      <Container>
        <UpdateAcquistionForm />
      </Container>
    </Container>
  );
};

export default UpdateAcquisition;
