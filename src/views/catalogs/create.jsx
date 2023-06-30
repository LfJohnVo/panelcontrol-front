import React from 'react';
import { Container } from '@mui/material';
import FormCatalogo from '../../components/catalogo/FormCatalogo';
import { titleModulCatalogo } from '../../common/text/TextTitle';
import { titleModulCatalogo } from '../../common/text/TextTitle';
import { textBienvenida } from '../../common/text/TextCardWellcome';
import Bienvenida from '../../components/bienvenida/Bienvenida';

const CreateCatalog = () => {
  const props = {
    navigateLink: '/catalogo',
    title: titleModulCatalogo.titleCatalogoList,
    text: titleModulCatalogo.descriptionCatalogoList,
    textCard: textBienvenida,
  };
  return (
    <>
      <Container maxWidth="lg">
        <Bienvenida {...props} />
        <Container>
          <FormCatalogo {...props} />
        </Container>
      </Container>
    </>
  );
};

export default CreateCatalog;
