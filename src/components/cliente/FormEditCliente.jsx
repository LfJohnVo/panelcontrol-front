import { Button, Grid } from "@mui/material";
import React, { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { inputValidate } from "../../common/text/Validation";
<<<<<<< HEAD
import { useParams } from "react-router-dom";
import { selectUser } from "../../features/login/loginSlice";
import { getOneCliente, updateCliente } from "../../services/clientes/clientes";
import { redirectClient } from "../../common/text/RedirectRoute";
import { cliente } from "../../common/text/Notify";
import { notifyMessage } from "../notify/NotifyMessage";
import { useNavigate } from "react-router-dom";
import NotifyContainer from "../notify/NotifyContainer";

function FormEditCliente(props) {
  const { id } = useParams();
  const token = useSelector(selectUser);
  const loading = useSelector(selectLoading);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [err, setErr] = useState(null);
  const [errorMessage, setErrorMessage] = useState([]);
  const navigate = useNavigate();

  //functions

  const setValuesData = (data) => {
    setValue("name", data.name);
    setValue("email", data.email);
    setValue("domicilio", data.domicilio);
    setValue("razon_social", data.razon_social);
    setValue("contacto", data.contacto);
  };

  const editCliente = async () => {
    try {
      dispatch(changeTrue());
      const response = await getOneCliente(id, token.token);
      setValuesData(response);
      dispatch(changeFalse());
    } catch (error) {
      setErr(true);
      setErrorMessage(error.message);
    }
  };

  const submitForm = async (data, e) => {
    try {
      setOpen(true);
      await updateCliente(data, id, token.token);
      setOpen(false);
      notifyMessage(cliente.edit);
      setTimeout(() => {
        navigate(redirectClient.index);
      }, 6000);
    } catch (error) {
      setOpen(false);
      console.log(error);
    }
  };

  //Effects
  useEffect(() => {
    editCliente();
=======
import TitleModul from "../../components/bienvenida/TitleModul";
import { useEditClient } from "../../hooks/useClient";
import { TextInput } from "../common/inputs";
import { BackdropCustom, PaperLayout } from "../common/layouts";
import Loading from "../loading/Loading";
import NotifyContainer from "../notify/NotifyContainer";

function FormEditCliente(props) {
  const [loading, open, register, handleSubmit, errors, getInfo, submitForm] =
    useEditClient();

  useEffect(() => {
    getInfo();
>>>>>>> P360-43-correccion-de-vista-del-modulo-de-catalogo-servicios
  }, []);

  return (
    <>
      <NotifyContainer />
<<<<<<< HEAD
      <Backdrop
        sx={{ color: "blue", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

=======
      <BackdropCustom open={open} />
>>>>>>> P360-43-correccion-de-vista-del-modulo-de-catalogo-servicios
      {loading ? (
        <Loading />
      ) : (
        <>
          <Grid item md={12}>
            <TitleModul {...props} />
          </Grid>

          <PaperLayout>
            <Grid
              container
              component="form"
              onSubmit={handleSubmit(submitForm)}
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={3}
            >
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <TextInput
                  title="Nombre"
                  name="name"
                  variant="outlined"
                  register={register}
                  errors={errors}
                  options={{ required: inputValidate.required }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <TextInput
                  title="Correo"
                  name="email"
                  variant="outlined"
                  register={register}
                  errors={errors}
                  options={{
                    required: inputValidate.required,
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: inputValidate.email,
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <TextInput
                  title="Razón Social"
                  name="razon_social"
                  variant="outlined"
                  register={register}
                  errors={errors}
                  options={{ required: inputValidate.required }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <TextInput
                  title="Contacto"
                  name="contacto"
                  variant="outlined"
                  register={register}
                  errors={errors}
                  options={{ required: inputValidate.required }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={7}>
                <TextInput
                  title="Dirección"
                  name="domicilio"
                  variant="outlined"
                  register={register}
                  errors={errors}
                  options={{ required: false }}
                />
              </Grid>
              <Grid
                container
                item
                xs={12}
                sm={12}
                md={12}
                spacing={3}
<<<<<<< HEAD
                direction="row"
                justifyContent="flex-start"
                alignItems="strech"
              >
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <TextField
                    label="Nombre"
                    name="name"
                    variant="outlined"
                    fullWidth
                    {...register("name", {
                      required: inputValidate.required,
                    })}
                    error={!!errors?.name}
                    helperText={errors?.name ? errors.name.message : null}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <TextField
                    label="Correo"
                    name="email"
                    variant="outlined"
                    fullWidth
                    {...register("email", {
                      required: inputValidate.required,
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: inputValidate.email,
                      },
                    })}
                    error={!!errors?.email}
                    helperText={errors?.email ? errors.email.message : null}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <TextField
                    label="Razón Social"
                    name="razon_social"
                    variant="outlined"
                    fullWidth
                    {...register("razon_social", {
                      required: inputValidate.required,
                    })}
                    error={!!errors?.razon_social}
                    helperText={
                      errors?.razon_social ? errors.razon_social.message : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <TextField
                    label="Contacto"
                    name="contacto"
                    variant="outlined"
                    fullWidth
                    {...register("contacto", {
                      required: inputValidate.required,
                    })}
                    error={!!errors?.contacto}
                    helperText={
                      errors?.contacto ? errors.contacto.message : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={7}>
                  <TextField
                    label="Direccion"
                    name="domicilio"
                    variant="outlined"
                    fullWidth
                    {...register("domicilio", {
                      required: inputValidate.required,
                    })}
                    error={!!errors?.domicilio}
                    helperText={
                      errors?.domicilio ? errors.domicilio.message : null
                    }
                  />
                </Grid>
              </Grid>

              {/* Columna de la derecha */}
              <Grid
                container
                item
                xs={12}
                sm={12}
                md={13}
                spacing={3}
                direction="column"
=======
                direction="row-reverse"
>>>>>>> P360-43-correccion-de-vista-del-modulo-de-catalogo-servicios
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <Grid item xs={12} sm={6} md={4}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Enviar Cliente
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Button
                    fullWidth
                    variant="outlined"
                    sx={{ mt: 3, mb: 2 }}
                    type="button"
                    onClick={() => reset()}
                  >
                    Limpiar
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </PaperLayout>
        </>
      )}
    </>
  );
}

export default FormEditCliente;
