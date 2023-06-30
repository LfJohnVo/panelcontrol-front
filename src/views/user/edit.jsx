import React from 'react';
import { Container, Grid } from '@mui/material';
import EditUserForm from '../../components/forms/editUser';
import Bienvenida from '../../components/bienvenida/Bienvenida';
import { titleUser, titleUserTitle } from '../../common/text/TextTitle';
import { textBienvenida } from '../../common/text/TextCardWellcome';

const EditUser = () => {
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
          <EditUserForm />
        </Grid>
      </Grid>
    </Container>
  );
};

export default EditUser;
