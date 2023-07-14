import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { notify } from '../lib/notify';
import { client } from '../lib/axios';
import { getCookie } from '../lib/cookies';

/**
 * Usa este hook para obtener la lista
 * de todos los clientes
 */
export const useGetClients = () => {
  const [loadingClientes, setLoadingClientes] = useState(false);
  const [clients, setClients] = useState([]);
  const token = getCookie('token');

  const handleGetClients = useCallback(
    async (filters = [], pag = 1, order = 'ASC', orderby = 'id') => {
      try {
        setLoadingClientes(true);
        const response = await client.get('/api/clients', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setClients(response.data.data);
        setLoadingClientes(false);
      } catch (error) {
        notify(error.response.data.status, error.response.data.message);
        setLoadingClientes(false);
      }
    }
  );

  useEffect(() => {
    handleGetClients();
  }, []);

  return [loadingClientes, clients, handleGetClients];
};

/**
 * Usa este hook para eliminar a un cliente
 *
 * @returns
 */
export const useDeleteClient = () => {
  const [alert, setAlert] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [id, setId] = useState('');
  const token = getCookie('token');
  const navigate = useNavigate();
  const handleOpenAlert = useCallback(id => {
    setId(id);
    setAlert(true);
  });

  const handleCloseAlert = useCallback(() => {
    setAlert(false);
  });

  const handleDelete = useCallback(async () => {
    setDeleted(true);
    setAlert(false);
    try {
      const resp = await client.delete(`/api/users/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      notify(resp.data.status, resp.data.message);
      setTimeout(() => {
        setDeleted(false);
        navigate(0);
      }, 1000);
    } catch (error) {
      notify(error.response.data.status, error.response.data.message);
      setDeleted(false);
    }
  });
  return [alert, handleOpenAlert, handleCloseAlert, handleDelete, deleted];
};

/**
 * Usa este hook para crear usuarios
 *
 * @returns
 */
export const useCreateClient = () => {
  const [clientCreated, setClientCreated] = useState(false);
  const token = getCookie('token');
  const navigate = useNavigate();

  const handleCreate = useCallback(async values => {
    try {
      setClientCreated(true);
      const resp = await client.post('/api/clients', values, {
        headers: { Authorization: `Bearer ${token}` },
      });
      notify(resp.data.status, resp.data.message);
      setClientCreated(false);
      setTimeout(() => {
        navigate('/clients');
      }, 1000);
    } catch (error) {
      notify(error.response.data.status, error.response.data.message);
      setClientCreated(false);
    }
  });

  return [clientCreated, handleCreate];
};

/**
 * Usa este hook para actualizar clientes
 */
export const useUpdateClient = () => {
  const { id } = useParams();
  const [clientUpdated, setClientUpdated] = useState(false);
  const token = getCookie('token');
  const navigate = useNavigate();

  const handleUpdate = useCallback(async values => {
    try {
      setClientUpdated(true);
      const resp = await client.put(`/api/clients/${id}`, values, {
        headers: { Authorization: `Bearer ${token}` },
      });
      notify(resp.data.status, resp.data.message);
      setClientUpdated(false);
      setTimeout(() => {
        navigate('/clients');
      }, 1000);
    } catch (error) {
      notify(error.response.data.status, error.response.data.message);
      setClientUpdated(false);
    }
  });

  return [clientUpdated, handleUpdate];
};

/**
 * Usa este hook para obtener a un usuario
 */
export const useGetClient = () => {
  const { id } = useParams();
  const token = getCookie('token');
  const [loading, setLoading] = useState(false);
  const [cliente, setCliente] = useState({});

  const handleGetClient = useCallback(async () => {
    try {
      setLoading(true);
      const resp = await client.get(`/api/clients/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCliente(resp.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      notify(error.response.data.status, error.response.data.message);
    }
  });

  useEffect(() => {
    handleGetClient();
  }, []);

  return [loading, cliente];
};
