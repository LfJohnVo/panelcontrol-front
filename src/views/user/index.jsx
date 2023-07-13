import React from 'react';
import TableUser from '../../components/tables/users';
import { ViewLayout } from '../../components/common/layouts';

const User = () => {
  const breadcrumbs = [
    {
      title: 'Usuarios',
      link: '/users',
    },
  ];
  return (
    <ViewLayout actualPage={'Usuarios'} breadcrumbs={breadcrumbs}>
      <TableUser />
    </ViewLayout>
  );
};

export default User;
