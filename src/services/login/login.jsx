import { panel_control } from '../index';

const route = 'api/auth/login';

export const isAuthenticate = async body => {
  try {
    const response = await panel_control.post(route, body);
    return response;
  } catch (err) {
    return err;
  }
};
