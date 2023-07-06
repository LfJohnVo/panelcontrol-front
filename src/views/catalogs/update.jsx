import React from 'react';
import { titleModulCatalogo } from '../../common/text/TextTitle';
import { textBienvenida } from '../../common/text/TextCardWellcome';
import UpdateCatalogForm from '../../components/forms/catalog/update';
import { ViewLayout } from '../../components/common/layouts';

const UpdateCatalog = () => {
  const props = {
    navigateLink: '/catalogo',
    title: titleModulCatalogo.titleCatalogoList,
    text: titleModulCatalogo.descriptionCatalogoList,
    textCard: textBienvenida,
  };

  return (
    <ViewLayout props={props}>
      <UpdateCatalogForm />
    </ViewLayout>
  );
};

export default UpdateCatalog;
