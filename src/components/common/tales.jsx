import { Box, Container, Grid, Typography } from '@mui/material';
import { GridToolbarQuickFilter } from '@mui/x-data-grid';

export const TableSearchBar = ({ children, tableTitle }) => {
  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <Typography
          component="h1"
          variant="h5"
          fontSize={'20px'}
          ml={'35px'}
          mt={'26px'}
        >
          {tableTitle}
        </Typography>
      </Box>
      <Grid container>
        <Grid item xs={6} mt="33px" ml="22px" mb="16px">
          <GridToolbarQuickFilter fullWidth />
        </Grid>

        <Grid
          item
          xs={5}
          mt="33px"
          ml="22px"
          mb="16px"
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          {children}
        </Grid>
      </Grid>
    </Container>
  );
};
