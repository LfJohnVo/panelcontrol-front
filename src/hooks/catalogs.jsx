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
  const [loading, setLoading] = useState(false);
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

  return [loading, catalogs, handleGetCatalogs];
};

/**
 * Usa este hook para crear usuarios
 *
 * @returns
 */
export const useCreateCatalog = () => {
  const [clientCreated, setClientCreated] = useState(false);
  const token = getCookie('token');
  const navigate = useNavigate();

  const handleCreate = useCallback(async values => {
    try {
      setClientCreated(true);
      const resp = await client.post('/api/users', values, {
        headers: { Authorization: `Bearer ${token}` },
      });
      notify(resp.data.status, resp.data.message);
      setClientCreated(false);
      setTimeout(() => {
        navigate('/users');
      }, 1000);
    } catch (error) {
      notify(error.response.data.status, error.response.data.message);
      setClientCreated(false);
    }
  });

  return [clientCreated, handleCreate];
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
  const [user, setUser] = useState({});

  const handleGetUser = useCallback(async () => {
    try {
      setLoading(true);

      const resp = await client.get(`/api/users/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(resp.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);

      notify(error.response.data.status, error.response.data.message);
    }
  });

  useEffect(() => {
    handleGetUser();
  }, []);

  return [loading, user];
};

/**
 * Usa este hook para actualizar un usuario
 *
 * @returns
 */
export const useUpdateCatalog = () => {
  const { id } = useParams();
  const [userUpdated, setUserUpdated] = useState(false);
  const token = getCookie('token');
  const navigate = useNavigate();

  const handleUpdate = useCallback(async values => {
    try {
      setUserUpdated(true);
      const resp = await client.put(`/api/users/${id}`, values, {
        headers: { Authorization: `Bearer ${token}` },
      });
      notify(resp.data.status, resp.data.message);
      setUserUpdated(false);
      setTimeout(() => {
        navigate('/users');
      }, 1000);
    } catch (error) {
      notify(error.response.data.status, error.response.data.message);
      setUserUpdated(false);
    }
  });

  return [userUpdated, handleUpdate];
};
