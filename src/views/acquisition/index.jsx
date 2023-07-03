import React from 'react';
import { Container } from '@mui/material';
import { titleModulAdquisicionServicio } from '../../common/text/TextTitle';
import { textBienvenida } from '../../common/text/TextCardWellcome';
import Bienvenida from '../../components/bienvenida/Bienvenida';
import TableAdquisicionServicio from '../../components/adquisicion-servicio/TableAdquisicionServicio';

const Acquisition = () => {
  const props = {
    navigateLink: '/adquisiciones',
    title: titleModulAdquisicionServicio.titleAdquisicionServicioList,
    text: titleModulAdquisicionServicio.descriptionAdquisicionServicioList,
    textCard: textBienvenida,
  };
  return (
    <Container maxWidth="lg">
      <Bienvenida {...props} />
      <Container>
        <TableAdquisicionServicio />
      </Container>
    </Container>
  );
};

export default Acquisition;
