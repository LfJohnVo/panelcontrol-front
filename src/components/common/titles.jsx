import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Link as linkrouter } from 'react-router-dom';
import Link from '@mui/material/Link';
const TitleModule = ({ navigateLink, title, text }) => {
  return (
    <Grid item xs={12} md={12} lg={12}>
      <Grid container mt={'18px'} mb={'16px'}>
        <Grid item md={6} xs={6}>
          <Typography component="h1" variant="h1">
            {title.text}
          </Typography>
        </Grid>
        <Grid item style={{ textAlign: 'right' }} md={6} xs={6}>
          <Link component={linkrouter} to={navigateLink} underline="none">
            <Typography component="h1" variant="h2">
              {text}
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TitleModule;
