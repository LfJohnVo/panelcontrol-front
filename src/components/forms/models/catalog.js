import { validateRequired } from '../../../lib/validations';

export const CreateCatalogModel = {
  values: {
    title: '',
    url_base: '',
    modules: [],
  },
  form: [
    {
      type: 'row',
      items: [
        {
          type: 'text',
          size: 6,
          name: 'title',
          label: 'Titulo',
          placeholder: 'Escribe el nombre del proyecto',
        },
        {
          type: 'text',
          size: 6,
          name: 'url_base',
          label: 'URL base',
          placeholder: 'Escribe la url base del proyecto',
        },
      ],
    },
    {
      type: 'multiplechip',
      size: 12,
      name: 'modules',
      arrayInputs: {
        values: {
          title: '',
          url: '',
        },
        inputs: [
          {
            name: 'title',
            placeholder: 'Escribe el titulo del modulo',
            label: 'Titulo',
          },
          {
            name: 'url',
            placeholder: 'Escribe la url del modulo',
            label: 'URL',
          },
        ],
      },
    },
  ],
  validate: values => {
    const errors = {};
    const title = validateRequired(values.title, 'Nombre');
    const url_base = validateRequired(values.url_base, 'URL base');

    if (title) errors.title = title;
    if (url_base) errors.url_base = url_base;
    return errors;
  },
};

export const CreateCatalogReset = {
  values: {
    title: '',
    url_base: '',
    modules: [],
  },
};
