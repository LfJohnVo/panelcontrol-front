import React from "react";
import { useState } from "react";
import { Grid, Paper, TextField, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../loading/Loading";
import "react-toastify/dist/ReactToastify.css";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import TitleModul from "../../components/bienvenida/TitleModul";
import { colorsTable } from "../../common/color/color";
import { useForm } from "react-hook-form";
import { inputValidate } from "../../common/text/Validation";
import { createCatalogo } from "../../services/catalogo/catalogo";
import NotifyContainer from "../notify/NotifyContainer";
import { notifyMessage } from "../notify/NotifyMessage";
import { catalogo } from "../../common/text/Notify";
import { redirectCatalogo } from "../../common/text/RedirectRoute";
import { useNavigate } from "react-router-dom";
import { selectUser } from "../../features/login/loginSlice";
import { useGetClients } from "../../hooks";
import { MultiSelect, SelectInput, TextInput } from "../common/inputs";
import { BackdropCustom, PaperLayout } from "../common/layouts";

function FormCatalogo(props) {
  // const loading = useSelector(selectLoading);
  const ejemploModul = [
    {
      id: 1,
      title: "Timesheet",
    },
    {
      id: 2,
      title: "SGI",
    },
    {
      id: 3,
      title: "test",
    },
  ];

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const token = useSelector(selectUser);
  const [moduls, setModuls] = useState([]);
  const [clientsSelected, setClientsSelected] = useState("");
  const [clients, loading] = useGetClients();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      moduls: moduls,
    },
  });

  //functions

  const submitForm = async (data, e) => {
    try {
      data.moduls = moduls;
      console.log(data);
      setOpen(true);
      await createCatalogo(data, token.token);
      setOpen(false);
      notifyMessage(catalogo.add);
      setTimeout(() => {
        navigate(redirectCatalogo.index);
      }, 6000);
    } catch (error) {
      setOpen(false);
      console.log(error);
    }
  };

  const handleDelete = (chipToDelete) => () => {
    setModuls((texto) => texto.filter((texto) => texto !== chipToDelete));
  };

  return (
    <>
      <NotifyContainer />

      <BackdropCustom open={open} />
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
                {loading ? (
                  <Loading />
                ) : (
                  <SelectInput
                    name={"clientes"}
                    data={clients}
                    value={clientsSelected}
                    setValue={setClientsSelected}
                  />
                )}
              </Grid>
              {/* <Grid item xs={12} sm={6} md={6} lg={6}>
                <TextField
                  label="Nombre"
                  name="title"
                  variant="outlined"
                  fullWidth
                  {...register("title", {
                    required: inputValidate.required,
                  })}
                  error={!!errors?.title}
                  helperText={errors?.title ? errors.title.message : null}
                />
              </Grid> */}

              <Grid item xs={12} sm={6} md={6} lg={6}>
                <TextInput
                  name={"title"}
                  register={register}
                  errors={errors}
                  options={{ required: inputValidate.required }}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={6}>
                <MultiSelect
                  name={"modulos"}
                  data={ejemploModul}
                  values={moduls}
                  setValues={setModuls}
                  handleDelete={handleDelete}
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
                    Enviar Servicio
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </PaperLayout>
      </>
    </>
  );
}

export default FormCatalogo;
