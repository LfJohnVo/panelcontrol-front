import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { notify } from '../lib/notify';
import { addUser } from '../features/login/loginSlice';
import { useFormik } from 'formik';
import { client } from '../lib/axios';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/login/loginSlice';
import { setCookie, deleteCookie, getCookie } from '../lib/cookies';

/**
 * @author DamianDev
 *
 * @description
 * Usa este hook para hacer validaciones con formik
 *
 * @param {*} initialValues
 * @param {*} onSubmit
 * @param {*} validate
 * @returns
 */
export const useValidate = (initialValues, onSubmit, validate) => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  return formik;
};

/**
 * @author DamianDev
 *
 * @description
 * Hook para oprimizar la carga y renderizado de los componentes mediante un LazyLoading del componetne.
 * Recibe como parámetro un elemento y un state para poder ser implementado adecuadamente en el dom
 *
 * @param {*} element
 * @param {*} setShow
 *
export const useLazyRender = () => {
  const [show, setShow] = useState(false);
  const element = useRef(null);

  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      const observer = new window.IntersectionObserver(entries => {
        const { isIntersecting } = entries[0];
        if (isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      });
      observer.observe(element.current);
    });
  }, [element]);

  return [element, show];
};
*/

/**
 * @author DamianDev
 *
 * @description
 * Hook para almacenar datos en el localstorage de la aplicación
 *
 * @param {*} key
 * @param {*} initialValue
 * @returns
 */
export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item !== null ? JSON.parse(item) : initialValue;
    } catch (e) {
      return initialValue;
    }
  });

  const setLocalStorage = value => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      setValue(value);
    } catch (e) {
      console.error(e);
    }
  };

  return [storedValue, setLocalStorage];
};

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

/**
 * Usa este hook para obtener la lista
 * de todos los clientes
 *
 */
export const useGetUsers = () => {
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
        console.log(error);
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

export const useDeleteUser = () => {
  const [alert, setAlert] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const token = getCookie('token');
  const handleOpenAlert = useCallback(() => {
    setAlert(true);
  });

  const handleCloseAlert = useCallback(() => {
    setAlert(false);
  });

  const handleDelete = useCallback(async id => {
    setDeleted(true);
    setAlert(false);
    try {
      const response = await client.delete(`/api/clients/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      notify(resp.data.status, resp.data.data.message);
      setDeleted(false);
    } catch (error) {
      notify(error.response.data.status, error.response.data.message);
      setDeleted(false);
    }
  });

  return [alert, handleOpenAlert, handleCloseAlert, handleDelete];
};
