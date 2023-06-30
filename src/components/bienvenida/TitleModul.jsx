import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Link as linkrouter } from 'react-router-dom';
import Link from '@mui/material/Link';
import { ThemeProvider, createTheme } from '@mui/material/styles';
function TitleModul(props2) {
  const { navigateLink, title, text } = props2;
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: 20,
        color: '#2567AE',
      },
      h2: {
        fontSize: 15,
        color: '#2567AE',
      },
    },
  });
  return (
    <>
      <Grid item xs={12} md={12} lg={12}>
        <ThemeProvider theme={theme}>
          <Grid container mt={'18px'} mb={'16px'}>
            <Grid item md={6} xs={6}>
              <Typography component="h1" variant="h1">
                {title.text}
              </Typography>
            </Grid>
            <Grid item style={{ textAlign: 'right' }} md={6} xs={6}>
              <Link component={linkrouter} to={navigateLink} underline="none">
                <Typography component="h1" variant="h2">
                  {text.text}
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </ThemeProvider>
      </Grid>
    </>
  );
}

export default TitleModul;
