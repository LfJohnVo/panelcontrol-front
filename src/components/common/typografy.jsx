import { Grid, Typography } from '@mui/material';
export const DetailTypografy = ({ size, title, data }) => {
  return (
    <Grid item sm={size} xs={12}>
      <Typography component="h1" variant="h2">
        {title}
      </Typography>
      <Typography component="p" variant="h3" sx={{ pt: '16px' }}>
        {data}
      </Typography>
    </Grid>
  );
};
