import React from 'react';
import TableProjects from '../../components/tables/projects';
import { ViewLayout } from '../../components/common/layouts';

const Catalog = () => {
  const breadcrumbs = [
    {
      title: 'Proyectos',
      link: '/projects',
    },
  ];
  return (
    <ViewLayout actualPage={'Proyectos'} breadcrumbs={breadcrumbs}>
      <TableProjects />
    </ViewLayout>
  );
};

export default Catalog;
