import React from 'react';
import { ViewLayout } from '../../components/common/layouts';

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
      <div>Hola mundo</div>
      {/*<AdquisicionServicioDetail {...props} />*/}
    </ViewLayout>
  );
};

export default ShowAcquisition;
