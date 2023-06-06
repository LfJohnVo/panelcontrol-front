import React from "react";
import { useState, useEffect } from "react";
import {
  Grid,
  Paper,
  Button,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
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
import { useForm, Controller } from "react-hook-form";
import { inputValidate } from "../../common/text/Validation";
import { v4 as uuidv4 } from "uuid";

function FormAdquisicionServicio(props) {
  const loading = useSelector(selectLoading);
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      cliente: "",
      proyecto: "",
    },
  });
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [err, setErr] = useState(null);
  const [errorMessage, setErrorMessage] = useState([]);
  const [clientes, setClientes] = useState([
    { id: 1, name: "cliente 1" },
    { id: 2, name: "cliente 2" },
  ]);
  const [proyectos, setProyectos] = useState([
    { id: 1, name: "proyecto 1" },
    { id: 2, name: "proyecto 2" },
  ]);

  //functions

  const createAdquisicionServicio = () => {
    try {
      setTimeout(() => {
        dispatch(changeTrue());
        setTimeout(() => {
          dispatch(changeFalse());
        }, 2000);
      }, 100);
    } catch (error) {
      setErr(true);
      setErrorMessage(error.message);
    }
  };

  const submitForm = (data, e) => {
    console.log(data);

    // validateUserCreate(values);
  };

  //Effects
  useEffect(() => {
    createAdquisicionServicio();
  }, []);

  return (
    <>
      <Backdrop
        sx={{ color: "blue", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      {loading ? (
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Paper
            elevation={1}
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              height: 60,
              width: 600,
              background: "#FFFFF",
            }}
          >
            <Loading />
          </Paper>
        </Grid>
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
                <Grid item xs={6} sm={6} md={6} lg={6}>
                  <FormControl fullWidth error={!!errors?.cliente}>
                    <InputLabel id="selected-category-ticket-label">
                      Cliente
                    </InputLabel>
                    <Controller
                      render={({ field }) => (
                        <Select
                          {...field}
                          labelId="select-urgencia-ticket-label"
                          label="Cliente"
                        >
                          {clientes.map((cliente) => {
                            return (
                              <MenuItem key={uuidv4()} value={cliente.id}>
                                {cliente.name}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      )}
                      name="cliente"
                      control={control}
                      rules={{
                        required: true,
                      }}
                    />
                    <FormHelperText>
                      {errors?.cliente ? inputValidate.required : null}
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6}>
                  <FormControl fullWidth error={!!errors?.proyecto}>
                    <InputLabel id="selected-Proyecto">Proyecto</InputLabel>
                    <Controller
                      render={({ field }) => (
                        <Select
                          {...field}
                          labelId="select-Proyecto"
                          label="Proyecto"
                        >
                          {proyectos.map((proyecto) => {
                            return (
                              <MenuItem key={uuidv4()} value={proyecto.id}>
                                {proyecto.name}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      )}
                      name="proyecto"
                      control={control}
                      rules={{
                        required: true,
                      }}
                    />
                    <FormHelperText>
                      {errors?.proyecto ? inputValidate.required : null}
                    </FormHelperText>
                  </FormControl>
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
                      Enviar Servicio
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

export default FormAdquisicionServicio;
