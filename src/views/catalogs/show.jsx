import React from 'react';
import CatalogoDetail from '../../components/catalogo/CatalogoDetail';
import { titleModulCatalogo } from '../../common/text/TextTitle';
import { textBienvenida } from '../../common/text/TextCardWellcome';
import { ViewLayout } from '../../components/common/layouts';

const ShowCatalog = () => {
  const props = {
    navigateLink: '/catalogo',
    title: titleModulCatalogo.titleCatalogoList,
    text: titleModulCatalogo.descriptionCatalogoList,
    textCard: textBienvenida,
  };
  return (
    <ViewLayout props={props}>
      <CatalogoDetail {...props} />
    </ViewLayout>
  );
};

export default ShowCatalog;
