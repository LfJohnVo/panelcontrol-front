import React from 'react';
import { ViewLayout } from '../../components/common/layouts';
import TableAcquisitions from '../../components/tables/acquisitions';

const Acquisition = () => {
  const breadcrumbs = [
    {
      title: 'Adquisiciones',
      link: '/acquisitions',
    },
  ];
  return (
    <ViewLayout actualPage={'Adquisiciones'} breadcrumbs={breadcrumbs}>
      <TableAcquisitions />
    </ViewLayout>
  );
};

export default Acquisition;
