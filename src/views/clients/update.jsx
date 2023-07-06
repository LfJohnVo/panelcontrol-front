import React from 'react';
import { titleModulCliente } from '../../common/text/TextTitle';
import { textBienvenida } from '../../common/text/TextCardWellcome';
import UpdateClientForm from '../../components/forms/client/update';
import { ViewLayout } from '../../components/common/layouts';

const UpdateClient = () => {
  const props = {
    navigateLink: '/clientes',
    title: titleModulCliente.titleClienteEdit,
    text: titleModulCliente.descriptionClienteEdit,
    textCard: textBienvenida,
  };

  return (
    <ViewLayout props={props}>
      <UpdateClientForm />
    </ViewLayout>
  );
};

export default UpdateClient;
