import React from 'react';
import { colorsTable } from '../../common/color/color';
import { Grid, Paper, Divider } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TitleModul from '../../components/bienvenida/TitleModul';
import Loading from '../loading/Loading';
import { sf } from '../../common/text/SF';
import { TypographyCustom } from '../common/Typographys';
import { useGetUser } from '../../hooks/user';

function UserDetail(props) {
  const [loading, user] = useGetUser();

  const theme = createTheme({
    typography: {
      h1: {
        fontSize: 20,
      },
      h2: {
        fontSize: 18,
      },
      h3: {
        fontSize: 15,
      },
    },
  });

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Grid item md={12}>
            <TitleModul {...props} />
          </Grid>

          <ThemeProvider theme={theme}>
            <Grid item xs={12} md={12} lg={12} mb={3}>
              <Paper
                elevation={0}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: 'auto',
                  background: colorsTable.colorFondo,
                  mb: '105px',
                  pb: '25px',
                }}
              >
                <Grid item sm={12}>
                  <TypographyCustom
                    title="Usuario"
                    component="h1"
                    variant="h1"
                    sx={{ mb: '16px', mt: '25px', ml: '35px' }}
                  />
                </Grid>
                <Divider />
                <Grid
                  item
                  sm={12}
                  sx={{ m: '27px 44px 25px 34px', textAlign: 'justify' }}
                >
                  <TypographyCustom
                    title={user && user.name ? user.name : sf}
                    component="h1"
                    variant="h3"
                  />
                </Grid>
                <Divider sx={{ mb: '21px' }} />
                <Grid
                  container
                  item
                  spacing={2}
                  md={12}
                  direction="row"
                  justifyContent="start"
                  sx={{ mb: '80px', pl: '39px', pr: '146px' }}
                >
                  <Grid item md={2} sm={4} xs={12}>
                    <TypographyCustom title="ID" component="h1" variant="h2" />
                    <TypographyCustom
                      title={user && user.id ? user.id : sf}
                      component="p"
                      variant="h3"
                      sx={{ pt: '16px' }}
                    />
                  </Grid>
                  <Grid item md={2} sm={4} xs={12} sx={{ pt: '16px' }}>
                    <TypographyCustom
                      title="CREADO"
                      component="h1"
                      variant="h2"
                    />
                    <TypographyCustom
                      title={user && user.create_date ? user.create_date : sf}
                      component="p"
                      variant="h3"
                      sx={{ pt: '16px' }}
                    />
                  </Grid>
                  <Grid item md={2} sm={4} xs={12} sx={{ pt: '16px' }}></Grid>
                </Grid>
                <Grid
                  container
                  item
                  spacing={3}
                  direction="row"
                  justifyContent="flex-start"
                  sx={{ mb: '80px', pl: '39px' }}
                >
                  <Grid item md={2} sm={4} xs={12}>
                    <TypographyCustom
                      title="CORREO"
                      component="h1"
                      variant="h2"
                    />
                    <TypographyCustom
                      title={user && user.email ? user.email : sf}
                      component="p"
                      variant="h3"
                      sx={{ pt: '16px' }}
                    />
                  </Grid>
                  <Grid item md={2} sm={4} xs={12}>
                    <TypographyCustom
                      title="RAZON SOCIAL"
                      component="h1"
                      variant="h2"
                    />
                    <TypographyCustom
                      title={user && user.razon_social ? user.razon_social : sf}
                      component="p"
                      variant="h3"
                      sx={{ pt: '16px' }}
                    />
                  </Grid>
                  <Grid item md={2} sm={4} xs={12}>
                    <TypographyCustom
                      title="CONTACTO"
                      component="h1"
                      variant="h2"
                    />
                    <TypographyCustom
                      title={user && user.contacto ? user.contacto : sf}
                      component="p"
                      variant="h3"
                      sx={{ pt: '16px' }}
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  item
                  spacing={3}
                  direction="row"
                  justifyContent="flex-start"
                  sx={{ pl: '39px' }}
                >
                  <Grid item md={3} sm={4} xs={12}>
                    <TypographyCustom
                      title="DIRRECION"
                      component="h1"
                      variant="h2"
                    />
                    <TypographyCustom
                      title={user && user.contacto ? user.contacto : sf}
                      component="p"
                      variant="h3"
                      sx={{ pt: '16px' }}
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </ThemeProvider>
        </>
      )}
    </>
  );
}

export default UserDetail;
