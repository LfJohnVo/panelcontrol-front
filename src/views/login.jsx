import React from 'react';
import { PrincipalLayout } from '../components/common/layouts';
import '../styles/index.css';
import img from '../assets/login/logo-s4b.png';
import img2 from '../assets/login/5143312.png';
import { Grid, Box, Typography, LinearProgress } from '@mui/material';
import LoginForm from '../components/forms/loginForm';
import { useAuthValid } from '../hooks/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isLogin, token] = useAuthValid();
  const navigate = useNavigate();
  if (isLogin) {
    navigate('/dashboard');
  }

  return (
    <PrincipalLayout>
      <div className="fondo">
        <img src={img2} alt="Pruebas" />
      </div>
      <LinearProgress variant="indeterminate" />
      <Grid
        container
        item
        lg={12}
        sx={{
          height: '100%',
        }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'left',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              my: 3,
              mx: 3,
            }}
          >
            <div className="s4b">
              <img src={img} alt="Logo-s4b" />
            </div>
            <Box sx={{ mb: 1 }}>
              <Typography component="h1" variant="h4">
                Panel de control
              </Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography component="p" variant="h6">
                ¡Bienvenidos a la suite que está transformando la forma en que
                las empresas gestionan sus procesos empresariales!
              </Typography>
            </Box>
            <Typography component="p">
              Descubre cómo nuestra tecnología de vanguardia está revolucionando
              la industria y ayudando a las empresas a alcanzar un nuevo nivel
              de eficiencia y productividad.
            </Typography>
          </Box>
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={6}
          md={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'left',
            justifyContent: 'center',
          }}
        ></Grid>
      </Grid>
    </PrincipalLayout>
  );
};

export default Login;
