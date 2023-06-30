import React from 'react';
import { Container, Divider, Grid } from '@mui/material';
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
    <>
      <Container maxWidth="lg">
        <Grid container spacing={2} rowSpacing={2}>
          <Bienvenida {...props} />
          <Divider />
          <Container>
            <TableUser {...props} />
          </Container>
        </Grid>
      </Container>
    </>
  );
};

export default User;
