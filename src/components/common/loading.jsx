import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Paper, Grid } from '@mui/material/';
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));

const Loading = () => {
  return (
    <Grid
      item
      xs={12}
      md={12}
      lg={12}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Paper
        elevation={1}
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          height: 60,
          width: 600,
          background: '#FFFFF',
        }}
      >
        <Box sx={{ flexGrow: 16 }}>
          <BorderLinearProgress variant="indeterminate" />
        </Box>
      </Paper>
    </Grid>
  );
};

export default Loading;
