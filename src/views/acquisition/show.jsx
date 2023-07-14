import React from 'react';
import { ViewLayout } from '../../components/common/layouts';
import DetailAcquisition from '../../components/details/acquisition';

const ShowAcquisition = () => {
  const breadcrumbs = [
    {
      title: 'Adquisiciones',
      link: '/acquisitions',
    },
    {
      title: 'Adquisicion',
      link: '#',
    },
  ];
  return (
    <ViewLayout actualPage={'Adquisiciones'} breadcrumbs={breadcrumbs}>
      <DetailAcquisition />
    </ViewLayout>
  );
};

export default ShowAcquisition;
