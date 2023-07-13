import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import bienvenida from '/src/assets/dashboard/Grupo1255.svg';
import { PaperLayout } from './layouts';

const Welcome = () => {
  return (
    <PaperLayout color="#6AA0DB">
      <Grid
        item
        lg={4}
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <img src={bienvenida} alt="Imagen de bienvenida dashboard" />
      </Grid>
      <Grid
        item
        lg={8}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
        }}
      >
        <Typography variant="h1Ligth">Bienvenido</Typography>
        <Typography component="p" variant="subtitleLigth">
          Aquí podrás encontrar los datos mas relevantes de tus casos
        </Typography>
        <Typography component="p" variant="textLigth">
          En este panel de administración, podrás ver una visión general de
          todos los tickets abiertos, asignados y cerrados. Podrás realizar
          búsquedas, filtrar por diferentes criterios y obtener informes
          detallados sobre el rendimiento del equipo desoporte.
        </Typography>
      </Grid>
    </PaperLayout>
  );
};

export default Welcome;
