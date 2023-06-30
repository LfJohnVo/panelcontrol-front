import { Container, Grid } from '@mui/material';
import Bienvenida from '../components/bienvenida/Bienvenida';
import TableDasboard from '../components/dashboard/TableDasboard';

const Dashboard = () => {
  const props = {
    navigateLink: '/dashboard',
    title: 'test',
    text: 'text',
    textCard: 'card',
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
