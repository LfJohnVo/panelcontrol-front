import { Container, Grid } from '@mui/material';
import Bienvenida from '../components/bienvenida/Bienvenida';
import TableDasboard from '../components/dashboard/TableDasboard';
import { titleUser, titleUserTitle } from '../common/text/TextTitle';
import { textBienvenida } from '../common/text/TextCardWellcome';

const Dashboard = () => {
  const props = {
    navigateLink: '/dashboard',
    title: titleUser,
    text: titleUserTitle,
    textCard: textBienvenida,
  };
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} rowSpacing={2}>
        <Bienvenida {...props} />
        <TableDasboard />
      </Grid>
    </Container>
  );
};

export default Dashboard;
