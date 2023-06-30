import React from 'react';
import { Container } from '@mui/material';
import FormEditCatalogo from '../../components/catalogo/FormEditCatalogo';
import { titleModulCatalogo } from '../../common/text/TextTitle';
import { textBienvenida } from '../../common/text/TextCardWellcome';
import Bienvenida from '../../components/bienvenida/Bienvenida';

const UpdateCatalog = () => {
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
          <FormEditCatalogo {...props} />
        </Container>
      </Container>
    </>
  );
};

export default UpdateCatalog;
