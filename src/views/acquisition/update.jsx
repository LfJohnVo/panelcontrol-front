import React from 'react';
import UpdateAcquistionForm from '../../components/forms/acquisition/update';
import { ViewLayout } from '../../components/common/layouts';

const UpdateAcquisition = () => {
  const breadcrumbs = [
    {
      title: 'Adquisiciones',
      link: '/acquisitions',
    },
    {
      title: 'Actualizar',
      link: '#',
    },
  ];
  return (
    <ViewLayout actualPage={'Adquisiciones'} breadcrumbs={breadcrumbs}>
      <UpdateAcquistionForm />
    </ViewLayout>
  );
};

export default UpdateAcquisition;
