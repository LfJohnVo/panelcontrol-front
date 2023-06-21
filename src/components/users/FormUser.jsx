import React from "react";
import { useState, useEffect } from "react";
import {
  Grid,
  Paper,
  TextField,
  Button,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormControl,
  FormHelperText,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
  changeFalse,
  changeTrue,
  selectLoading,
} from "../../features/loading/loadingSlice";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../loading/Loading";
import "react-toastify/dist/ReactToastify.css";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import TitleModul from "../../components/bienvenida/TitleModul";
import { colorsTable } from "../../common/color/color";
import { useForm } from "react-hook-form";
import { inputValidate } from "../../common/text/Validation";
import { createUser } from "../../services/users/users";
import { selectUser } from "../../features/login/loginSlice";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import NotifyContainer from "../notify/NotifyContainer";
import { notifyMessage } from "../notify/NotifyMessage";
import { user } from "../../common/text/Notify";
import { redirectUser } from "../../common/text/RedirectRoute";
import { useNavigate } from "react-router-dom";

function FormUser(props) {
  const loading = useSelector(selectLoading);
  const token = useSelector(selectUser);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [err, setErr] = useState(null);
  const [errorMessage, setErrorMessage] = useState([]);
  const [showPassword, setShowPassword] = useState();

  //functions

  const getLoading = () => {
    dispatch(changeTrue());
    setTimeout(function () {
      dispatch(changeFalse());
    }, 2000);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const submitForm = async (data, e) => {
    try {
      setOpen(true);
      await createUser(data, token.token);
      setOpen(false);
      notifyMessage(user.add);
      setTimeout(() => {
        navigate(redirectUser.index);
      }, 6000);
    } catch (error) {
      setOpen(false);
      console.log(error);
    }
  };

  //Effects
  useEffect(() => {
    getLoading();
  }, []);

  return (
    <>
      <NotifyContainer />
      <Backdrop
        sx={{ color: "blue", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      {loading ? (
        <Loading />
      ) : (
        <>
          <Grid item md={12}>
            <TitleModul {...props} />
          </Grid>

          <Paper
            elevation={0}
            sx={{
              p: "61px 51px 64px 27px",
              display: "flex",
              flexDirection: "row",
              height: "auto",
              background: colorsTable.white,
              mb: "125px",
              border: `1px solid ${colorsTable.borderColor}`,
            }}
          >
            <Grid
              container
              component="form"
              onSubmit={handleSubmit(submitForm)}
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={3}
            >
              {/* columna de la izquierda */}
              <Grid
                container
                item
                xs={12}
                sm={12}
                md={12}
                spacing={3}
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
                  <FormControl
                    variant="outlined"
                    fullWidth
                    {...register("password", {
                      required: inputValidate.required,
                    })}
                    error={!!errors?.password}
                    helperText={
                      errors?.password ? errors.password.message : null
                    }
                  >
                    <InputLabel htmlFor="outlined-adornment-password">
                      Password
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                    />
                    <FormHelperText>
                      {errors?.password ? inputValidate.required : null}
                    </FormHelperText>
                  </FormControl>
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
                      required: false,
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
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <Grid
                  container
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  spacing={3}
                  direction="row-reverse"
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
                      Enviar Usuario
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
            </Grid>
          </Paper>
        </>
      )}
    </>
  );
}

export default FormUser;
