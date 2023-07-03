import { validateRequired } from '../../../lib/validations';

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
