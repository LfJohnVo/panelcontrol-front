import { panel_control } from '../index';

const route = 'api/projects';
const route2 = 'api/modul';

export const getAllCatalogo = async token => {
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

export const createCatalogo = async (body, token) => {
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

export const getOneCatalogo = async (id, token) => {
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

export const updateCatalogo = async (data, id, token) => {
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

export const deleteCatalogo = async (id, token) => {
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

export const deleteModulo = async (id, token) => {
  try {
    const response = await panel_control.delete(`${route2}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    throw error;
  }
};
