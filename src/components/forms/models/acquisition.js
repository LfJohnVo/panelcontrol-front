export const CreateAcquisitionModel = {
  values: {
    client_id: '',
    proyect_id: '',
    modules: [],
  },
  form: [
    {
      type: 'select',
      size: 12,
      name: 'client_id',
      label: 'Cliente',
      items: [],
    },
    {
      type: 'select',
      depends: true,
      callback: null,
      size: 12,
      name: 'project_id',
      label: 'Proyecto',
      items: [],
    },
    {
      type: 'checkbox',
      size: 12,
      name: 'modules',
      label: 'Modulos',
      items: [],
    },
  ],
  validate: values => {
    const errors = {};

    return errors;
  },
};
