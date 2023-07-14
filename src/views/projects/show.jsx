import React from 'react';
import { ViewLayout } from '../../components/common/layouts';
import DetailCatalog from '../../components/details/proyect';

const ShowCatalog = () => {
  const breadcrumbs = [
    {
      title: 'Proyectos',
      link: '/projects',
    },
    {
      title: 'Detalle',
      link: '#',
    },
  ];
  return (
    <ViewLayout actualPage={'Proyectos'} breadcrumbs={breadcrumbs}>
      <DetailCatalog />
    </ViewLayout>
  );
};

export default ShowCatalog;
