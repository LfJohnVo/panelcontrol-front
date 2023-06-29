import { Button, Grid } from "@mui/material";
import React, { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { inputValidate } from "../../common/text/Validation";
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
  }, []);

  return (
    <>
      <NotifyContainer />
      <BackdropCustom open={open} />
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
