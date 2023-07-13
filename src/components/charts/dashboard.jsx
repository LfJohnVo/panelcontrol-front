import { Grid } from '@mui/material';
import { CounterCard } from '../common/cards';

export const DashboardCounters = () => {
  return (
    <Grid container spacing={1}>
      <CounterCard
        counter={3}
        description={'Pagos realizados'}
        color={'#3BC0A4'}
        size={3}
      />
      <CounterCard
        counter={1}
        description={'Pagos pendientes'}
        color={'#FFAA00'}
        size={3}
      />
      <CounterCard
        counter={5}
        description={'Pagos en progreso'}
        color={'#FF0000'}
        size={3}
      />
      <CounterCard
        counter={20}
        description={'Pagos cancelados'}
        color={'#5A5A5A'}
        size={3}
      />
    </Grid>
  );
};
