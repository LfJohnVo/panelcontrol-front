import React from 'react';
import UpdateCatalogForm from '../../components/forms/catalog/update';
import { ViewLayout } from '../../components/common/layouts';

const UpdateCatalog = () => {
  const breadcrumbs = [
    {
      title: 'Proyectos',
      link: '/projects',
    },
    {
      title: 'Actualizar',
      link: '#',
    },
  ];
  return (
    <ViewLayout actualPage={'Actualizar proyecto'} breadcrumbs={breadcrumbs}>
      <UpdateCatalogForm />
    </ViewLayout>
  );
};

export default UpdateCatalog;
