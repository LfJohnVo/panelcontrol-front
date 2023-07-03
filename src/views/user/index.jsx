import React from 'react';
import { Container } from '@mui/material';
import { titleUser, titleUserTitle } from '../../common/text/TextTitle';
import { textBienvenida } from '../../common/text/TextCardWellcome';
import Bienvenida from '../../components/bienvenida/Bienvenida';
import TableUser from '../../components/tables/users';

const User = () => {
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
        <TableUser />
      </Container>
    </Container>
  );
};

export default User;
