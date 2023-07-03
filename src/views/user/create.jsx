import React from 'react';
import { Container } from '@mui/material';
import CreateUserForm from '../../components/forms/user/create';
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
      <Bienvenida {...props} />
      <Container item xs={12} md={12} lg={12}>
        <CreateUserForm />
      </Container>
    </Container>
  );
};

export default UserCreate;
