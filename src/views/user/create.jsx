import React from 'react';
import { Container, Grid } from '@mui/material';
import CreateUserForm from '../../components/forms/createUserForm';
import { titleUser, titleUserTitle } from '../../common/text/TextTitle';
import { textBienvenida } from '../../common/text/TextCardWellcome';
import Bienvenida from '../../components/bienvenida/Bienvenida';

const UserCreate = () => {
  const props = {
    navigateLink: '/users',
    title: titleUser,
    text: titleUserTitle,
    textCard: textBienvenida,
  };
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3} rowSpacing={0}>
        <Bienvenida {...props} />
        <Grid item xs={12} md={12} lg={12}>
          <CreateUserForm />
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserCreate;
