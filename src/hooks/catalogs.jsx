import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { notify } from '../lib/notify';
import { client } from '../lib/axios';
import { getCookie } from '../lib/cookies';

/**
 * Usa este hook para obtener la lista
 * de todos los usuarios
 *
 */
export const useGetCatalogs = () => {
  const [loadingCatalog, setLoading] = useState(false);
  const [catalogs, setCatalogs] = useState([]);
  const token = getCookie('token');

  const handleGetCatalogs = useCallback(
    async (filters = [], pag = 1, order = 'ASC', orderby = 'id') => {
      try {
        setLoading(true);
        const response = await client.get('/api/projects', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCatalogs(response.data.data);
        setLoading(false);
      } catch (error) {
        notify(error.response.data.status, error.response.data.message);
        setLoading(false);
      }
    }
  );

  useEffect(() => {
    handleGetCatalogs();
  }, []);

  return [loadingCatalog, catalogs, handleGetCatalogs];
};

/**
 * Usa este hook para crear usuarios
 *
 * @returns
 */
export const useCreateCatalog = () => {
  const [catalogCreated, setCatalogCreated] = useState(false);
  const token = getCookie('token');
  const navigate = useNavigate();

  const handleCreate = useCallback(async values => {
    try {
      // console.log(values);
      setCatalogCreated(true);
      const resp = await client.post('/api/projects', values, {
        headers: { Authorization: `Bearer ${token}` },
      });
      notify(resp.data.status, resp.data.message);
      setCatalogCreated(false);
      setTimeout(() => {
        navigate('/projects');
      }, 1000);
    } catch (error) {
      notify(error.response.data.status, error.response.data.message);
      setCatalogCreated(false);
    }
  });

  return [catalogCreated, handleCreate];
};

/**
 * Usa este hook para crear un usuario
 *
 * @returns
 */
export const useGetCatalog = () => {
  const { id } = useParams();
  const token = getCookie('token');
  const [loading, setLoading] = useState(false);
  const [catalog, setCatalog] = useState({});

  const handleGetCatalog = useCallback(async () => {
    try {
      setLoading(true);
      const resp = await client.get(`/api/projects/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCatalog(resp.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      notify(error.response.data.status, error.response.data.message);
    }
  });

  useEffect(() => {
    handleGetCatalog();
  }, []);

  return [loading, catalog];
};

/**
 * Usa este hook para actualizar un usuario
 *
 * @returns
 */
export const useUpdateCatalog = () => {
  const { id } = useParams();
  const [catalogUpdated, setCatalogUpdated] = useState(false);
  const token = getCookie('token');
  const navigate = useNavigate();

  const handleUpdate = useCallback(async values => {
    try {
      console.log(values);
      // setCatalogUpdated(true);
      // const resp = await client.put(`/api/projects/${id}`, values, {
      //   headers: { Authorization: `Bearer ${token}` },
      // });
      // notify(resp.data.status, resp.data.message);
      // setCatalogUpdated(false);
      // setTimeout(() => {
      //   navigate('/projects');
      // }, 1000);
    } catch (error) {
      notify(error.response.data.status, error.response.data.message);
      setCatalogUpdated(false);
    }
  });

  return [catalogUpdated, handleUpdate];
};
