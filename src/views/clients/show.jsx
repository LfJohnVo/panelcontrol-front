import React from 'react';
import { ViewLayout } from '../../components/common/layouts';
import DetailClient from '../../components/details/client';

const ShowClient = () => {
  const breadcrumbs = [
    {
      title: 'Clientes',
      link: '/clients',
    },
    {
      title: 'Detalle',
      link: '#',
    },
  ];
  return (
    <ViewLayout actualPage={'Clientes'} breadcrumbs={breadcrumbs}>
      <DetailClient />
    </ViewLayout>
  );
};

export default ShowClient;
