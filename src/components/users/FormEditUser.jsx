import React from 'react';
import { useEffect } from 'react';
import { Grid, Button } from '@mui/material';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../loading/Loading';
import 'react-toastify/dist/ReactToastify.css';
import TitleModul from '../../components/bienvenida/TitleModul';
import { inputValidate } from '../../common/text/Validation';
import NotifyContainer from '../notify/NotifyContainer';
import { useEditUser } from '../../hooks/useUser';
import { BackdropCustom, PaperLayout } from '../common/layouts';
import { TextInput, InputPassword } from '../common/inputs';

function FormEditUser(props) {
  const [
    loading,
    open,
    register,
    handleSubmit,
    errors,
    getInfoUser,
    submitForm,
  ] = useEditUser();

  useEffect(() => {
    getInfoUser();
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
                  options={{ required: inputValidate.required }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <InputPassword
                  name="password"
                  register={register}
                  errors={errors}
                  options={{ required: false }}
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
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <TextInput
                  title="Direccion"
                  name="domicilio"
                  variant="outlined"
                  register={register}
                  errors={errors}
                  options={{ required: inputValidate.required }}
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
                    Editar Usuario
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

export default FormEditUser;
