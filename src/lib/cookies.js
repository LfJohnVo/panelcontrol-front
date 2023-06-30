import cookie from 'js-cookie';

export const setCookie = (name, value, options = {}) => {
  cookie.set(name, value, { ...options, expires: 7 });
};

export const deleteCookie = name => {
  cookie.remove(name);
};

export const getCookie = name => {
  return cookie.get(name);
};
