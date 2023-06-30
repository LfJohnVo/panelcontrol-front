import { panel_control } from '../index';

const route = 'api/clients';

export const getAllClients = async token => {
  try {
    const response = await panel_control.get(route, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = response.data.data;
    return data;
  } catch (error) {
    throw error;
  }
};

export const createCliente = async (body, token) => {
  try {
    const response = await panel_control.post(route, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const getOneCliente = async (id, token) => {
  try {
    const response = await panel_control.get(`${route}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const updateCliente = async (data, id, token) => {
  try {
    const response = await panel_control.put(`${route}/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const deleteCliente = async (id, token) => {
  try {
    const response = await panel_control.delete(`${route}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    throw error;
  }
};
