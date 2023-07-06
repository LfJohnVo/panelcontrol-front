import React from 'react';
import AdquisicionServicioDetail from '../../components/adquisicion-servicio/AdquisicionServicioDetail';
import { titleModulAdquisicionServicio } from '../../common/text/TextTitle';
import { ViewLayout } from '../../components/common/layouts';

const ShowAcquisition = () => {
  const props = {
    navigateLink: '/adquisiciones',
    title: titleModulAdquisicionServicio.titleAdquisicionServicioDetail,
    text: titleModulAdquisicionServicio.descriptionAdquisicionServicioDetail,
  };
  return (
    <ViewLayout props={props}>
      <AdquisicionServicioDetail {...props} />
    </ViewLayout>
  );
};

export default ShowAcquisition;
