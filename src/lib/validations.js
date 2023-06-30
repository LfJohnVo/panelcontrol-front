export const validateRequired = (value, name) => {
  if (!value) return `El campo ${name} es requerido`;
  return false;
};

export const validatePhone = value => {
  const regex =
    /^[\(]?[\+]?(\d{2}|\d{3})[\)]?[\s]?((\d{6}|\d{8})|(\d{3}[\*\.\-\s]){3}|(\d{2}[\*\.\-\s]){4}|(\d{4}[\*\.\-\s]){2})|\d{8}|\d{10}|\d{12}$/;
  return regex.test(value);
};

export const validateMax = (value, max) => {
  return value.length <= max;
};

export const validateMin = (value, min) => {
  return value.length >= min;
};

export const validatePassword = value => {
  if (validateRequired(value)) return 'La contraseña es un campo requerido';

  if (/\s/.test(value)) {
    return 'La contraseña no puede estar vacia';
  }
  if (value.length < 8) {
    return 'La contraseña no puede ser menor a 8 caracteres';
  }
  if (!/[A-Z]/.test(value)) {
    return 'La contraseña debe contener al menos una letra mayuscula';
  }
  if (!/[a-z]/) {
    return 'La contraseña debe contener al menos una letra minuscula';
  }
  if (!/\d/.test(value)) {
    return 'La contraseña debe contener al menos un número';
  }
  if (!/[!@#$%^&*]/.test(value)) {
    return 'La contraseña debe contener al menos un caracter especial !@#$%^&*';
  }
  return false;
};
