import { useRef, useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/app';
import { setCookie, deleteCookie, getCookie } from '../lib/cookies';
import Keycloak from 'keycloak-js';
import { useLocalStorage } from './generals';

export const useAuthValid = () => {
  const isRun = useRef();
  const [token, setToken] = useState(null);
  const [isLogin, setLogin] = useState(false);
  const [storedValue, setLocalStorage] = useLocalStorage('user', {});
  const { setSession, setUser } = useAppContext();

  useEffect(() => {
    const client = new Keycloak({
      url: 'http://192.168.9.113:8080',
      realm: 'admin-dev',
      clientId: 'panel',
    });

    if (isRun.current) return;

    isRun.current = true;

    client
      .init({
        onLoad: 'login-required',
        KeycloakResponseType: 'code',
      })
      .then(res => {
        setLogin(true);
        setToken(client.token);
        setSession(true);
        setCookie('token', client.token);
        setCookie('idToken', client.idToken);
        setCookie('refreshToken', client.refreshToken);
        setLocalStorage(client.tokenParsed);
      })
      .catch(err => {
        console.log(err, 'Error');
      });
  }, []);

  return [isLogin, token];
};

export const useLogout = () => {
  const { setSession } = useAppContext();
  const token = getCookie('token');
  const idToken = getCookie('idToken');
  const refreshToken = getCookie('refreshToken');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogout = useCallback(async () => {
    const client = new Keycloak({
      url: 'http://192.168.9.113:8080',
      realm: 'admin-dev',
      clientId: 'panel',
    });

    const result = await client.init({
      KeycloakResponseType: 'code',
      token,
      idToken,
      refreshToken,
    });

    if (result) {
      setLoading(true);
      deleteCookie('token');
      deleteCookie('idToken');
      deleteCookie('refreshToken');
      await client.logout({
        redirectUri: 'http://localhost:3000/dashboard',
      });
      setLoading(false);
    }
  }, []);

  return [loading, handleLogout];
};
