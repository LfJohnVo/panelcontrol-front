import React, {
  useContext,
  createContext,
  useState,
  useEffect,
  useMemo,
} from 'react';
import { getCookie } from '../lib/cookies';
import { useLocalStorage } from '../hooks/generals';

export const AppContext = createContext(null);

/**
 * Contexto para la creacion de cotizaciones
 *
 * @param {Component} children Componente hijo
 * @returns
 */
export const AppContextProvider = ({ children }) => {
  const [session, setSession] = useState(false);
  const [user, setUser] = useState({ name: '', email: '' });
  const token = getCookie('token');
  const [storedValue, setLocalStorage] = useLocalStorage('user', {});

  useEffect(() => {
    if (!session && token) {
      setSession(true);
      setUser(storedValue);
    }
  }, [session, user, setUser]);

  const values = useMemo(
    () => ({
      session,
      user,
      setSession,
      setUser,
    }),
    [session, user, setUser]
  );

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

/**
 * Exportamos el hook del contexto
 * @returns
 */
export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    console.error('Error deploying App Context!!!');
  }

  return context;
}

export default useAppContext;
