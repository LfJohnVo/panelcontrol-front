import React from 'react';
import { titleModulAdquisicionServicio } from '../../common/text/TextTitle';
import { textBienvenida } from '../../common/text/TextCardWellcome';
import TableAdquisicionServicio from '../../components/adquisicion-servicio/TableAdquisicionServicio';
import { ViewLayout } from '../../components/common/layouts';

const Acquisition = () => {
  const props = {
    navigateLink: '/adquisiciones',
    title: titleModulAdquisicionServicio.titleAdquisicionServicioList,
    text: titleModulAdquisicionServicio.descriptionAdquisicionServicioList,
    textCard: textBienvenida,
  };
  return (
    <ViewLayout props={props}>
      <TableAdquisicionServicio />
    </ViewLayout>
  );
};

export default Acquisition;
