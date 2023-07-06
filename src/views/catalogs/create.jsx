import React from 'react';
import { titleModulCatalogo } from '../../common/text/TextTitle';
import { textBienvenida } from '../../common/text/TextCardWellcome';
import CreateCatalogForm from '../../components/forms/catalog/create';
import { ViewLayout } from '../../components/common/layouts';

const CreateCatalog = () => {
  const props = {
    navigateLink: '/catalogo',
    title: titleModulCatalogo.titleCatalogoList,
    text: titleModulCatalogo.descriptionCatalogoList,
    textCard: textBienvenida,
  };
  return (
    <ViewLayout props={props}>
      <CreateCatalogForm />
    </ViewLayout>
  );
};

export default CreateCatalog;
