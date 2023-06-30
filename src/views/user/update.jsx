import React from 'react';
import { Container, Grid } from '@mui/material';
import EditUserForm from '../../components/forms/editUser';
import Bienvenida from '../../components/bienvenida/Bienvenida';
import { titleUser, titleUserTitle } from '../../common/text/TextTitle';
import { textBienvenida } from '../../common/text/TextCardWellcome';

const UpdateUser = () => {
  const props = {
    navigateLink: '/users',
    title: titleUser,
    text: titleUserTitle,
    textCard: textBienvenida,
  };

  return (
    <Container maxWidth="lg">
      <Bienvenida {...props} />
      <Container>
        <EditUserForm />
      </Container>
    </Container>
  );
};

export default UpdateUser;
