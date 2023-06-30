import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { cliente } from '../common/text/Notify';
import { redirectClient } from '../common/text/RedirectRoute';
import {
  changeFalse,
  changeTrue,
  selectLoading,
} from '../features/loading/loadingSlice';
import { selectUser } from '../features/login/loginSlice';
import { notify } from '../lib/notify';
import {
  createCliente,
  deleteCliente,
  getAllClients,
  getOneCliente,
  updateCliente,
} from '../services/clientes/clientes';

export const useCreateClient = () => {
  const token = useSelector(selectUser);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const submitForm = useCallback(async (data, e) => {
    try {
      setOpen(true);
      await createCliente(data, token.token);
      notify('success', cliente.add);
      setTimeout(() => {
        setOpen(false);
        navigate(redirectClient.index);
      }, 2000);
    } catch (error) {
      setOpen(false);
      console.log(error);
    }
  });

  return [open, submitForm, register, handleSubmit, reset, errors];
};

export const useEditClient = () => {
  const { id } = useParams();
  const token = useSelector(selectUser);
  const loading = useSelector(selectLoading);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const getInfo = useCallback(async () => {
    try {
      dispatch(changeTrue());
      const response = await getOneCliente(id, token.token);
      setValuesData(response);
      dispatch(changeFalse());
    } catch (error) {
      console.log(error);
    }
  });

  const setValuesData = useCallback(data => {
    setValue('name', data.name);
    setValue('email', data.email);
    setValue('domicilio', data.domicilio);
    setValue('razon_social', data.razon_social);
    setValue('contacto', data.contacto);
  });

  const submitForm = useCallback(async (data, e) => {
    try {
      setOpen(true);
      await updateCliente(data, id, token.token);
      notify('success', cliente.edit);
      setTimeout(() => {
        setOpen(false);
        navigate(redirectClient.index);
      }, 2000);
    } catch (error) {
      setOpen(false);
      console.log(error);
    }
  });

  return [loading, open, register, handleSubmit, errors, getInfo, submitForm];
};

export const useGetAllClients = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const token = useSelector(selectUser);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState('');

  const handleClickEdit = useCallback(async (e, cellValues) => {
    const id = cellValues.row.id;
    navigate(`/cliente/${id}/edit`);
  });

  const getInfo = useCallback(async () => {
    try {
      dispatch(changeTrue());
      const response = await getAllClients(token.token);
      setData(response);
      dispatch(changeFalse());
    } catch (error) {
      console.log(error);
    }
  });

  const handleClickDelete = useCallback(async e => {
    await deleteCliente(id, token.token);
    setOpen(false);
    notify('success', cliente.delete);
    getInfo();
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
    getInfo,
    loading,
    data,
    handleClickDelete,
    handleClickEdit,
    open,
    handleClose,
    handleOpen,
  ];
};

export const useDetailClient = () => {
  const { id } = useParams();
  const token = useSelector(selectUser);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();
  const [data, setData] = useState();

  const getDetailInfo = useCallback(async () => {
    try {
      dispatch(changeTrue());
      const response = await getOneCliente(id, token.token);
      setData(response);
      dispatch(changeFalse());
    } catch (error) {
      setErr(true);
      setErrorMessage(error.message);
    }
  });

  return [data, loading, getDetailInfo];
};
