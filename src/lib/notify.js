import { toast } from "react-toastify";

export const notify = (title) => {
    toast.error(title, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
}