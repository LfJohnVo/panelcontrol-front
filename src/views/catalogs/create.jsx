import React from 'react';
import { Container } from '@mui/material';
import { titleModulCatalogo } from '../../common/text/TextTitle';
import { textBienvenida } from '../../common/text/TextCardWellcome';
import Bienvenida from '../../components/bienvenida/Bienvenida';
import CreateCatalogForm from '../../components/forms/catalog/create';

const CreateCatalog = () => {
  const props = {
    navigateLink: '/catalogo',
    title: titleModulCatalogo.titleCatalogoList,
    text: titleModulCatalogo.descriptionCatalogoList,
    textCard: textBienvenida,
  };
  return (
    <Container maxWidth="lg">
      <Bienvenida {...props} />
      <Container>
        <CreateCatalogForm />
      </Container>
    </Container>
  );
};

export default CreateCatalog;
