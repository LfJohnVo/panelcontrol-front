import React from 'react';
import { titleModulCliente } from '../../common/text/TextTitle';
import { textBienvenida } from '../../common/text/TextCardWellcome';
import TableCliente from '../../components/tables/clients';
import { ViewLayout } from '../../components/common/layouts';

const Client = () => {
  const props = {
    navigateLink: '/clientes',
    title: titleModulCliente.titleClienteList,
    text: titleModulCliente.descriptionClienteList,
    textCard: textBienvenida,
  };
  return (
    <ViewLayout props={props}>
      <TableCliente />
    </ViewLayout>
  );
};

export default Client;
