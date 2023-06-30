import { Grid } from '@mui/material';
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { inputValidate } from '../../common/text/Validation';
import TitleModul from '../../components/bienvenida/TitleModul';
import { useCreateClient } from '../../hooks/useClient';
import { ButtonCustom } from '../common/buttons';
import { TextInput } from '../common/inputs';
import { BackdropCustom, PaperLayout } from '../common/layouts';
import NotifyContainer from '../notify/NotifyContainer';

function FormCliente(props) {
  const [open, submitForm, register, handleSubmit, reset, errors] =
    useCreateClient();

  return (
    <>
      <NotifyContainer />
      <BackdropCustom open={open} />

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
            alignItems="strech"
          >
            <Grid item xs={12} sm={6} md={4}>
              <ButtonCustom
                title="Enviar usuario"
                type="submit"
                sx={{ mt: 3, mb: 2 }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ButtonCustom
                title="Limpiar"
                type="button"
                variant="outlined"
                onClick={() => reset()}
                sx={{ mt: 3, mb: 2 }}
                fullWidth
              />
            </Grid>
          </Grid>
        </Grid>
      </PaperLayout>
    </>
  );
}

export default FormCliente;
