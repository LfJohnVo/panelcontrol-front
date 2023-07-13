import { Box, Switch, Typography } from '@mui/material';

export const StatusItem = ({ status }) => {
  const color = status ? '#C9FFBC' : '#FFE1E1';
  const variant = status ? 'statusActive' : 'statusPausado';

  return (
    <Box
      sx={{
        borderRadius: '20px',
        paddingRight: '10px',
        paddingLeft: '10px',
        display: 'flex',
        background: color,
      }}
    >
      <Typography variant={variant}>
        {status ? 'Activo' : 'Detenido'}
      </Typography>
    </Box>
  );
};

export const SwitchItem = ({ status, onChange }) => {
  return <Switch checked={status} onChange={onChange} color={'success'} />;
};
