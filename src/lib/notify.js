import { toast } from 'react-toastify';

export const notify = (type, title) => {
  toast?.[type](title, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });
};
