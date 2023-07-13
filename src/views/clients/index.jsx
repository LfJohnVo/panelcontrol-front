import React from 'react';
import TableCliente from '../../components/tables/clients';
import { ViewLayout } from '../../components/common/layouts';

const Client = () => {
  const breadcrumbs = [
    {
      title: 'Clientes',
      link: '/clients',
    },
  ];
  return (
    <ViewLayout actualPage={'Clientes'} breadcrumbs={breadcrumbs}>
      <TableCliente />
    </ViewLayout>
  );
};

export default Client;
