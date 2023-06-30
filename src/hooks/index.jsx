import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { notify } from '../lib/notify';
import { addUser } from '../features/login/loginSlice';
import { client } from '../lib/axios';
import { setCookie, deleteCookie, getCookie } from '../lib/cookies';

/**
 * Usa este hook para hacer login en la aplicacion
 *
 * @returns
 */
export const useLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const handleSubmit = useCallback(async values => {
    try {
      setLoading(true);
      const resp = await client.post('/api/auth/login', values);
      notify(resp.data.status, resp.data.data.message);
      dispatch(addUser(resp.data.data));
      setCookie('token', resp.data.data.token);
      setLoading(false);
      setTimeout(() => {
        navigate('/dashboard');
      }, 1000);
    } catch (error) {
      notify(error.response.data.status, error.response.data.message);
      setLoading(false);
    }
  });
  return [handleSubmit, loading];
};

/**
 * Usa este hook para hacer logout en la aplicación
 *
 * @returns
 */
export const useLogout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = getCookie('token');
  const [loading, setLoading] = useState(false);
  const handleLogout = useCallback(async () => {
    try {
      setLoading(true);
      const resp = await client.get('/api/auth/logout', {
        headers: { Authorization: `Bearer ${token}` },
      });
      notify(resp.data.status, resp.data.message);
      setLoading(false);
      setTimeout(() => {
        dispatch(addUser(null));
        deleteCookie('token');
        navigate('/');
      }, 1000);
    } catch (error) {
      notify(error.response.data.status, error.response.data.message);
      setLoading(false);
    }
  });

  return [loading, handleLogout];
};
