import React from 'react';
import { titleModulCatalogo } from '../../common/text/TextTitle';
import { textBienvenida } from '../../common/text/TextCardWellcome';
import TableCatalog from '../../components/tables/catalogs';
import { ViewLayout } from '../../components/common/layouts';

const Catalog = () => {
  const props = {
    navigateLink: '/catalogo',
    title: titleModulCatalogo.titleCatalogoList,
    text: titleModulCatalogo.descriptionCatalogoList,
    textCard: textBienvenida,
  };
  return (
    <ViewLayout props={props}>
      <TableCatalog />
    </ViewLayout>
  );
};

export default Catalog;
