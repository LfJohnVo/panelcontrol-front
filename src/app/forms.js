import { validatePassword, validateRequired } from '../lib/validations';

export const SignInModel = {
  values: {
    email: '',
    password: '',
  },
  form: [
    {
      type: 'text',
      name: 'email',
      label: 'Correo',
      placeholder: 'Escribe tu correo',
    },
    {
      type: 'password',
      name: 'password',
    },
  ],
  validate: values => {
    const errors = {};
    const user = validateRequired(values.email, 'email');
    const password = validateRequired(values.password, 'password');
    if (user) errors.user = user;
    if (password) errors.password = password;

    return errors;
  },
};

export const CreateUserModel = {
  values: {
    name: '',
    email: '',
    password: '',
    domicilio: '',
    razon_social: '',
    contacto: '',
  },
  form: [
    {
      type: 'row',
      items: [
        {
          type: 'text',
          column: true,
          size: 6,
          name: 'name',
          label: 'Nombre',
          placeholder: 'Escribe el nombre del usuario',
        },
        {
          type: 'text',
          column: true,
          size: 6,
          name: 'email',
          label: 'Correo',
          placeholder: 'Escribe el correo del usuario',
        },
      ],
    },
    {
      type: 'row',
      items: [
        {
          type: 'password',
          column: true,
          size: 6,
          name: 'password',
        },
        {
          type: 'text',
          column: true,
          size: 6,
          name: 'contacto',
          label: 'Contacto',
          placeholder: 'Escribe el contacto del usuario',
        },
      ],
    },
    {
      type: 'text',
      column: true,
      size: 6,
      name: 'domicilio',
      label: 'Domicilio',
      placeholder: 'Escribe el domicilio del usuario',
    },
    {
      type: 'text',
      column: true,
      size: 6,
      name: 'razon_social',
      label: 'Razon social',
      placeholder: 'Escribe la razon social del usuario',
    },
  ],
  validate: values => {
    const errors = {};
    const user = validateRequired(values.email, 'email');
    const password = validatePassword(values.password, 'password');
    if (user) errors.user = user;
    if (password) errors.password = password;

    return errors;
  },
};
