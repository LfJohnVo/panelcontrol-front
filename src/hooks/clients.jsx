import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { notify } from '../lib/notify';
import { client } from '../lib/axios';
import { getCookie } from '../lib/cookies';

/**
 * Usa este hook para obtener la lista
 * de todos los clientes
 *
 */
export const useGetClients = () => {
  const [loading, setLoading] = useState(false);
  const [clients, setClients] = useState([]);
  const token = getCookie('token');

  const handleGetClients = useCallback(
    async (filters = [], pag = 1, order = 'ASC', orderby = 'id') => {
      try {
        setLoading(true);
        const response = await client.get('/api/clients', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setClients(response.data.data);
        setLoading(false);
      } catch (error) {
        notify(error.response.data.status, error.response.data.message);
        setLoading(false);
      }
    }
  );

  useEffect(() => {
    handleGetClients();
  }, []);

  return [loading, clients, handleGetClients];
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
