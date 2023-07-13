import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { notify } from '../lib/notify';
import { client } from '../lib/axios';
import { getCookie } from '../lib/cookies';

/**
 * Usa este hook para obtener la lista
 * de todos las adquisiciones
 *
 */
export const useGetAcquisitions = () => {
  const [loadingAcquisitions, setLoadingAcquisitions] = useState(false);
  const [acquisitions, setAcqusitions] = useState([]);
  const token = getCookie('token');

  const handleGetAcqusitions = useCallback(
    async (filters = [], pag = 1, order = 'ASC', orderby = 'id') => {
      try {
        setLoadingAcquisitions(true);
        const response = await client.get('/api/acquisitions', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setAcqusitions(response.data.data);
        setLoadingAcquisitions(false);
      } catch (error) {
        notify(error.response.data.status, error.response.data.message);
        setLoadingAcquisitions(false);
      }
    }
  );

  useEffect(() => {
    handleGetAcqusitions();
  }, []);

  return [loadingAcquisitions, acquisitions, handleGetAcqusitions];
};

export const useChangeStatusAcquisition = () => {
  const token = getCookie('token');
  const navigate = useNavigate();
  const [id, setId] = useState(null);
  const [alert, setAlert] = useState(false);
  const [deleted, setDeleted] = useState(false);

  const handleOpenalert = useCallback((id, status) => {
    setId(id);
    setAlert(true);
  });

  const handleCloseAlert = useCallback(() => {
    setId(null);
    setAlert(false);
  });

  const handleUpdate = useCallback(async () => {
    try {
      setDeleted(true);
      setAlert(false);
      console.log(token, 'test');
      const resp = await client.put(
        `/api/acquisitions/${id}/status`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      notify(resp.data.status, resp.data.message);
      setTimeout(() => {
        setDeleted(false);
        navigate(0);
      }, 1000);
    } catch (error) {
      console.log(error);
      setDeleted(false);
      notify(error.response.data.status, error.response.data.message);
      setLoadingAcquisitions(false);
    }
  });

  return [handleOpenalert, handleCloseAlert, alert, handleUpdate, deleted];
};
