import React from 'react';
import { ViewLayout } from '../../components/common/layouts';
import DetailUser from '../../components/details/user';

const ShowUser = () => {
  const breadcrumbs = [
    {
      title: 'Usuarios',
      link: '/users',
    },
    {
      title: 'Detalle',
      link: '#',
    },
  ];
  return (
    <ViewLayout actualPage={'Usuarios'} breadcrumbs={breadcrumbs}>
      <DetailUser />
    </ViewLayout>
  );
};

export default ShowUser;
