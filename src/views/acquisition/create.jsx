import React from 'react';
import CreateAcquisitionForm from '../../components/forms/acquisition/create';
import { ViewLayout } from '../../components/common/layouts';

const AcquisitionCreate = () => {
  const breadcrumbs = [
    {
      title: 'Adquisiciones',
      link: '/acquisitions',
    },
    {
      title: 'Crear',
      link: '#',
    },
  ];
  return (
    <ViewLayout actualPage={'Adquisiciones'} breadcrumbs={breadcrumbs}>
      <CreateAcquisitionForm />
    </ViewLayout>
  );
};

export default AcquisitionCreate;
