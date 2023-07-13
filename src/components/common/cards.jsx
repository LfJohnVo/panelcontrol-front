import { Box, Grid, Typography } from '@mui/material';
import { PaperLayout } from './layouts';

export const CounterCard = ({ counter, description, color, size }) => {
  return (
    <Grid item lg={size}>
      <PaperLayout color={color}>
        <Box
          sx={{
            textAlign: 'center',
            width: '100%',
          }}
        >
          <Typography component={'p'} variant="h1Ligth">
            {counter}
          </Typography>
          <Typography variant="subtitleLigth">{description}</Typography>
        </Box>
      </PaperLayout>
    </Grid>
  );
};
