import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { notify } from '../lib/notify';
import { client } from '../lib/axios';
import { setCookie, deleteCookie, getCookie } from '../lib/cookies';
import { useAppContext } from '../context/app';
import { useLocalStorage } from './generals';

/**
 * Usa este hook para hacer login en la aplicacion
 *
 * @returns
 */
export const useLogin = () => {
  const navigate = useNavigate();
  const [storedValue, setLocalStorage] = useLocalStorage('user', {});
  const { setSession, setUser } = useAppContext();
  const [loading, setLoading] = useState(false);
  const handleSubmit = useCallback(async values => {
    try {
      setLoading(true);
      const resp = await client.post('/api/auth/login', values);
      notify(resp.data.status, resp.data.data.message);
      setCookie('token', resp.data.data.token);
      setSession(true);
      setUser(resp.data.data.user);
      setLocalStorage(resp.data.data.user);
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
 
export const useLogout = () => {
  const navigate = useNavigate();
  const { setSession } = useAppContext();
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
        deleteCookie('token');
        setSession(false);
        navigate('/');
      }, 1000);
    } catch (error) {
      notify(error.response.data.status, error.response.data.message);
      setLoading(false);
    }
  });

  return [loading, handleLogout];
};
*/
