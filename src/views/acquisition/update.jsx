import React from 'react';
import UpdateAcquistionForm from '../../components/forms/acquisition/update';
import { titleModulAdquisicionServicio } from '../../common/text/TextTitle';
import { textBienvenida } from '../../common/text/TextCardWellcome';
import { ViewLayout } from '../../components/common/layouts';

const UpdateAcquisition = () => {
  const props = {
    navigateLink: '/adquisiciones',
    title: titleModulAdquisicionServicio.titleAdquisicionServicioEdit,
    text: titleModulAdquisicionServicio.descriptionAdquisicionServicioEdit,
    textCard: textBienvenida,
  };

  return (
    <ViewLayout props={props}>
      <UpdateAcquistionForm />
    </ViewLayout>
  );
};

export default UpdateAcquisition;
