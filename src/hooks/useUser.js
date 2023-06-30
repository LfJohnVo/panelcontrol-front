import { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { notify } from '../lib/notify';
import {
  createUser,
  getOneUser,
  updateUser,
  getAllUsers,
  deleteUser,
} from '../services/users/users';
import { user } from '../common/text/Notify';
import { selectUser } from '../features/login/loginSlice';
import { redirectUser } from '../common/text/RedirectRoute';
import { useParams } from 'react-router-dom';
import {
  changeFalse,
  changeTrue,
  selectLoading,
} from '../features/loading/loadingSlice';
import { useForm } from 'react-hook-form';

export const useCreateUser = () => {
  const token = useSelector(selectUser);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const submitForm = useCallback(async (data, e) => {
    try {
      setOpen(true);
      await createUser(data, token.token);
      notify('success', user.add);
      setTimeout(() => {
        setOpen(false);
        navigate(redirectUser.index);
      }, 2000);
    } catch (error) {
      setOpen(false);
      console.log(error);
    }
  });

  return [open, submitForm];
};

export const useEditUser = () => {
  const { id } = useParams();
  const token = useSelector(selectUser);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const setValuesData = useCallback(data => {
    setValue('name', data.name);
    setValue('email', data.email);
    setValue('domicilio', data.domicilio);
    setValue('razon_social', data.razon_social);
    setValue('contacto', data.contacto);
    setValue('password', data.password);
  });

  const getInfoUser = useCallback(async () => {
    try {
      dispatch(changeTrue());
      const response = await getOneUser(id, token.token);
      setValuesData(response);
      dispatch(changeFalse());
    } catch (error) {
      setOpen(false);
      console.log(error);
    }
  });

  const submitForm = useCallback(async (data, e) => {
    try {
      setOpen(true);
      await updateUser(data, id, token.token);
      notify('success', user.edit);
      setTimeout(() => {
        setOpen(false);
        navigate(redirectUser.index);
      }, 2000);
    } catch (error) {
      setOpen(false);
      console.log(error);
    }
  });

  return [
    loading,
    open,
    register,
    handleSubmit,
    errors,
    getInfoUser,
    submitForm,
  ];
};

export const useGetAllUser = () => {
  const token = useSelector(selectUser);
  const loading = useSelector(selectLoading);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState('');

  const getUsers = useCallback(async () => {
    try {
      dispatch(changeTrue());
      const response = await getAllUsers(token.token);
      setData(response);
      dispatch(changeFalse());
    } catch (error) {
      console.log(error);
    }
  });

  const handleClickDeleteUser = useCallback(async e => {
    await deleteUser(id, token.token);
    setOpen(false);
    notify('success', user.delete);
    getUsers();
  });

  const handleClickEditUser = useCallback(async (e, cellValues) => {
    const id = cellValues.row.id;
    navigate(`/user/${id}/edit`);
  });

  const handleOpen = useCallback(async (e, cellValues) => {
    const id = cellValues.row.id;
    setId(id);
    setOpen(true);
  });

  const handleClose = useCallback(() => {
    setId('');
    setOpen(false);
  });

  return [
    getUsers,
    loading,
    data,
    handleClickDeleteUser,
    handleClickEditUser,
    open,
    handleClose,
    handleOpen,
  ];
};

export const useDetailUser = () => {
  const { id } = useParams();
  const token = useSelector(selectUser);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();
  const [data, setData] = useState();

  const getDetailUser = useCallback(async () => {
    try {
      dispatch(changeTrue());
      const response = await getOneUser(id, token.token);
      setData(response);
      dispatch(changeFalse());
    } catch (error) {
      setErr(true);
      setErrorMessage(error.message);
    }
  });

  return [data, loading, getDetailUser];
};
