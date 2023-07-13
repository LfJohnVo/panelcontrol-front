import React from 'react';
import CreateUserForm from '../../components/forms/user/create';
import { ViewLayout } from '../../components/common/layouts';

const UserCreate = () => {
  const breadcrumbs = [
    {
      title: 'Usuarios',
      link: '/users',
    },
    {
      title: 'Crear',
      link: '/users/create',
    },
  ];
  return (
    <ViewLayout actualPage={'Usuarios'} breadcrumbs={breadcrumbs}>
      <CreateUserForm />
    </ViewLayout>
  );
};

export default UserCreate;
