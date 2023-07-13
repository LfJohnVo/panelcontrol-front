import { toast } from 'react-toastify';

export const notify = (type, title) => {
  toast?.[type](title, {
    position: 'top-right',
    autoClose: 2000,
    closeOnClick: true,
    draggable: true,
    theme: 'light',
  });
};
