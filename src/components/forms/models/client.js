import { validatePassword, validateRequired } from '../../../lib/validations';

export const CreateClientModel = {
  values: {
    name: '',
    email: '',
    contacto: '',
    razon_social: '',
    representante: '',
    representante_email: '',
    representante_telefono: '',
    consultor: '',
    consultor_email: '',
    consultor_telefono: '',
    domicilio: '',
  },
  form: [
    {
      type: 'row',
      items: [
        {
          type: 'text',
          size: 6,
          name: 'name',
          label: 'Nombre',
          placeholder: 'Escribe el nombre del cliente',
        },
        {
          type: 'text',
          size: 6,
          name: 'email',
          label: 'Correo',
          placeholder: 'Escribe el correo del cliente',
        },
        {
          type: 'text',
          size: 6,
          name: 'contacto',
          label: 'Contacto',
          placeholder: 'Escribe el contacto del cliente',
        },
      ],
    },
    {
      type: 'row',
      items: [
        {
          type: 'text',
          size: 6,
          name: 'razon_social',
          label: 'Contacto',
          placeholder: 'Escribe la razon social del cliente',
        },
        {
          type: 'text',
          size: 6,
          name: 'representante',
          label: 'Representante',
          placeholder: 'Escribe el representante del cliente',
        },
      ],
    },
    {
      type: 'row',
      items: [
        {
          type: 'text',
          size: 6,
          name: 'representante_email',
          label: 'Email del representante',
          placeholder: 'Email del represetnante',
        },
        {
          type: 'text',
          size: 6,
          name: 'representante_telefono',
          label: 'Telefono del representante',
          placeholder: 'Escribe el telefono del representante',
        },
      ],
    },
    {
      type: 'row',
      items: [
        {
          type: 'text',
          size: 4,
          name: 'consultor',
          label: 'Nombre del consultor',
          placeholder: 'Escribe el nombre del consultor',
        },
        {
          type: 'text',
          size: 4,
          name: 'consultor_email',
          label: 'Correo',
          placeholder: 'Escribe el correo del consultor',
        },
        {
          type: 'text',
          size: 4,
          name: 'consultor_telefono',
          label: 'Contacto',
          placeholder: 'Escribe el telefono del consultor',
        },
      ],
    },
    {
      type: 'text',
      size: 6,
      name: 'domicilio',
      label: 'Domicilio',
      placeholder: 'Escribe el domicilio del usuario',
    },
  ],
  validate: values => {
    const errors = {};
    const name = validateRequired(values.name, 'Nombre');
    const email = validateRequired(values.email, 'Email');
    const contacto = validateRequired(values.contacto, 'Contacto');
    const razon_social = validateRequired(values.razon_social, 'Razon social');
    const representante = validateRequired(
      values.representante,
      'Representante'
    );
    const representante_email = validateRequired(
      values.representante_email,
      'Email de representante'
    );
    const representante_telefono = validateRequired(
      values.representante_telefono,
      'Telefono del representante'
    );
    const consultor = validateRequired(values.consultor, 'Consultor');
    const consultor_email = validateRequired(
      values.consultor_email,
      'Email del consultor'
    );
    const consultor_telefono = validateRequired(
      values.consultor_telefono,
      'Telefono del consultor'
    );
    const domicilio = validateRequired(values.domicilio, 'Domicilio');

    if (name) errors.name = name;
    if (email) errors.email = email;
    if (contacto) errors.contacto = contacto;
    if (razon_social) errors.razon_social = razon_social;
    if (representante) errors.representante = representante;
    if (representante_email) errors.representante_email = representante_email;
    if (representante_telefono)
      errors.representante_telefono = representante_telefono;
    if (consultor) errors.consultor = consultor;
    if (consultor_email) errors.consultor_email = consultor_email;
    if (consultor_telefono) errors.consultor_telefono = consultor_telefono;
    if (domicilio) errors.domicilio = domicilio;
    return errors;
  },
};
