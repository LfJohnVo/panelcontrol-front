import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import bienvenida from '/src/assets/dashboard/Grupo1255.svg';
import TitleModul from './TitleModul';

const Bienvenida = props => {
  const { navigateLink, title, text, textCard } = props;
  return (
    <>
      <Grid item md={12}>
        <TitleModul {...props} />
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Paper
          sx={{
            display: 'flex',
            flexDirection: 'row',
            height: 'auto',
            background: '#6AA0DB',
          }}
        >
          <Grid item m={'17.53px 10px 17.53px 22.5px'}>
            <img src={bienvenida} alt="Imagen de bienvenida dashboard" />
          </Grid>
          <Grid item sx={{ color: '#FFFFFF' }}>
            <Typography
              component="p"
              variant="h1"
              mt={'33px'}
              mb="7px"
              fontSize={'20px'}
            >
              {textCard.text1}
            </Typography>
            <Typography component="p" variant="subtitle1" fontSize={'17px'}>
              {textCard.text2}
            </Typography>
            <Typography
              component="p"
              variant="subtitle1"
              textAlign={'justify'}
              mr={'56px'}
              mt={'6px'}
              mb={'18px'}
              fontSize={'13px'}
            >
              {textCard.text3}
            </Typography>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
};

export default Bienvenida;
