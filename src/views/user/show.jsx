import React from 'react';
import { Grid, Container } from '@mui/material';
import UserDetail from '../../components/users/UserDetail';
import { titleModulUser } from '../../common/text/TextTitle';

function DetailUser() {
  const props = {
    navigateLink: '/users',
    title: titleModulUser.titleUserDetail,
    text: titleModulUser.descriptionUserDetail,
  };
  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={3} rowSpacing={0}>
          <Grid item xs={12} md={12} lg={12}>
            <UserDetail {...props} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default DetailUser;
