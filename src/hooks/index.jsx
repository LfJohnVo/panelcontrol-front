import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { notify } from "../lib/notify";
import { addUser } from "../features/login/loginSlice";
import { isAuthenticate } from "../services/login/login";

export const useLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();

    try {
      setOpen(true);
      const resp = await isAuthenticate({ email, password });
      setOpen(false);
      if (resp.status === 200) {
        dispatch(addUser(resp.data));
        navigate("/dashboard");
      }

      if (resp.status === 401) {
        notify("Error de acceso");
      }

      if (resp.status === 999) {
        notify("Error en el sistema");
      }
    } catch (error) {
      setOpen(false);
    }
  });

  const handleEmail = useCallback((e) => {
    setEmail(e.target.value);
  });

  const handlePassword = useCallback((e) => {
    setPassword(e.target.value);
  });

  return [handleSubmit, handleEmail, handlePassword, email, password, open];
};

