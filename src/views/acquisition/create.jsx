import React from 'react';
import { titleModulAdquisicionServicio } from '../../common/text/TextTitle';
import { textBienvenida } from '../../common/text/TextCardWellcome';
import CreateAcquisitionForm from '../../components/forms/acquisition/create';
import { ViewLayout } from '../../components/common/layouts';

const AcquisitionCreate = () => {
  const props = {
    navigateLink: '/adquisiciones',
    title: titleModulAdquisicionServicio.titleAdquisicionServicioCreate,
    text: titleModulAdquisicionServicio.descriptionAdquisicionServicioCreate,
    textCard: textBienvenida,
  };
  return (
    <ViewLayout props={props}>
      <CreateAcquisitionForm />
    </ViewLayout>
  );
};

export default AcquisitionCreate;
