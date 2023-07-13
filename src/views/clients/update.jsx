import React from 'react';
import UpdateClientForm from '../../components/forms/client/update';
import { ViewLayout } from '../../components/common/layouts';

const UpdateClient = () => {
  const breadcrumbs = [
    {
      title: 'Clientes',
      link: '/clients',
    },
    {
      title: 'Actualizar',
      link: '#',
    },
  ];
  return (
    <ViewLayout actualPage={'Actualizar clientes'} breadcrumbs={breadcrumbs}>
      <UpdateClientForm />
    </ViewLayout>
  );
};

export default UpdateClient;
