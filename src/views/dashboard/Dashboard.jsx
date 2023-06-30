import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Bienvenida from '../../components/bienvenida/Bienvenida';
import { titleDashboard, titleText } from '../../common/text/TextTitle';
import { textBienvenida } from '../../common/text/TextCardWellcome';
import TableDasboard from '../../components/dashboard/TableDasboard';

function Dashboard() {
  const props = {
    navigateLink: '/dashboard',
    title: titleDashboard,
    text: titleText,
    textCard: textBienvenida,
  };
  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={2} rowSpacing={2}>
          <Bienvenida {...props} />
          <TableDasboard />
        </Grid>
      </Container>
    </>
  );
}

export default Dashboard;
