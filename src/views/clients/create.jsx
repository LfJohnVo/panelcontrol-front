import React from 'react';
import { titleModulCliente } from '../../common/text/TextTitle';
import { textBienvenida } from '../../common/text/TextCardWellcome';
import CreateClientForm from '../../components/forms/client/create';
import { ViewLayout } from '../../components/common/layouts';

const CreateClient = () => {
  const props = {
    navigateLink: '/clientes',
    title: titleModulCliente.titleClienteCreate,
    text: titleModulCliente.descriptionClienteCreate,
    textCard: textBienvenida,
  };
  return (
    <ViewLayout props={props}>
      <CreateClientForm />
    </ViewLayout>
  );
};

export default CreateClient;
