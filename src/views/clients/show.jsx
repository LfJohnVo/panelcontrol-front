import React from 'react';
import { titleModulCliente } from '../../common/text/TextTitle';
import { ViewLayout } from '../../components/common/layouts';

const ShowClient = () => {
  const props = {
    navigateLink: '/clientes',
    title: titleModulCliente.titleClienteDetail,
    text: titleModulCliente.descriptionClienteDetail,
  };
  return (
    <ViewLayout props={props}>
      <div>test</div>
    </ViewLayout>
  );
};

export default ShowClient;
