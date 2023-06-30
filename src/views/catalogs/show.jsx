import React from 'react';
import { Container } from '@mui/material';
import CatalogoDetail from '../../components/catalogo/CatalogoDetail';
import { titleModulCatalogo } from '../../common/text/TextTitle';
import { titleModulCatalogo } from '../../common/text/TextTitle';
import { textBienvenida } from '../../common/text/TextCardWellcome';
import Bienvenida from '../../components/bienvenida/Bienvenida';

const ShowCatalog = () => {
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
          <CatalogoDetail {...props} />
        </Container>
      </Container>
    </>
  );
};

export default ShowCatalog;
