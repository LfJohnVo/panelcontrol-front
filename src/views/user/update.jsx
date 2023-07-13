import React from 'react';
import EditUserForm from '../../components/forms/user/update';
import { ViewLayout } from '../../components/common/layouts';

const UpdateUser = () => {
  const breadcrumbs = [
    {
      title: 'Usuarios',
      link: '/users',
    },
    {
      title: 'Actualizar',
      link: '#',
    },
  ];
  return (
    <ViewLayout actualPage={'Usuarios'} breadcrumbs={breadcrumbs}>
      <EditUserForm />
    </ViewLayout>
  );
};

export default UpdateUser;
