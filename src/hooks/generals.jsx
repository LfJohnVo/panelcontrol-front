import { useFormik } from 'formik';
import { useMemo, useRef, useCallback } from 'react';

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
 *
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

export const useCallbackCreator = (callback, inputs) => {
  const callbacks = useRef({});

  useMemo(() => {
    for (const id in callbacks.current) {
      callbacks.current[id].func = (...args) =>
        callback(
          callbacks.current[id].id,
          ...callbacks.current[id].savedArgs,
          ...args
        );
    }
  }, inputs);

  return useCallback((id, ...savedArgs) => {
    if (!callbacks.current[id]) {
      callbacks.current[id] = {
        id,
        savedArgs,
        func: (...args) => callback(id, ...savedArgs, ...args),
      };
    }
    return callbacks.current[id].func;
  }, inputs);
};
