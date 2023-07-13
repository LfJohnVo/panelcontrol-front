import React from 'react';
import CreateCatalogForm from '../../components/forms/catalog/create';
import { ViewLayout } from '../../components/common/layouts';

const CreateCatalog = () => {
  const breadcrumbs = [
    {
      title: 'Proyectos',
      link: '/projects',
    },
    {
      title: 'Crear',
      link: '#',
    },
  ];
  return (
    <ViewLayout actualPage={'Crear proyecto'} breadcrumbs={breadcrumbs}>
      <CreateCatalogForm />
    </ViewLayout>
  );
};

export default CreateCatalog;
