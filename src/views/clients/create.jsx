import React from 'react';
import CreateClientForm from '../../components/forms/client/create';
import { ViewLayout } from '../../components/common/layouts';

const CreateClient = () => {
  const breadcrumbs = [
    {
      title: 'Clientes',
      link: '/clients',
    },
    {
      title: 'Crear',
      link: '/clients/create',
    },
  ];
  return (
    <ViewLayout actualPage={'Registra cliente'} breadcrumbs={breadcrumbs}>
      <CreateClientForm />
    </ViewLayout>
  );
};

export default CreateClient;
