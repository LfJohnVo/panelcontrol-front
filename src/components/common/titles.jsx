import React from 'react';
import { Breadcrumbs, Grid, Typography } from '@mui/material';
import { Link as linkrouter } from 'react-router-dom';
import Link from '@mui/material/Link';

export const PrincipalTitle = ({ actualPage, breadcrumbs }) => {
  return (
    <Grid container mt={'18px'} mb={'16px'}>
      <Grid item md={6} xs={6}>
        <Typography variant="breadcrumbs">{actualPage}</Typography>
      </Grid>
      <Grid
        item
        md={6}
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <Breadcrumbs aria-label="breadcrumb">
          {breadcrumbs.map((item, index) => {
            return (
              <Link
                component={linkrouter}
                to={item.link}
                underline="none"
                key={index}
              >
                {item.title}
              </Link>
            );
          })}
        </Breadcrumbs>
      </Grid>
    </Grid>
  );
};
