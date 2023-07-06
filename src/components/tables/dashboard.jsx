import React from 'react';
import { colorsTable } from '../../common/color/color';
import { Grid, Typography, Box } from '@mui/material';
import { DataGrid, GridToolbarQuickFilter } from '@mui/x-data-grid';

function QuickSearchToolbar() {
  return (
    <div>
      <Grid
        item
        xs={12}
        md={12}
        lg={12}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          height: 'auto',
        }}
      >
        <Grid item md={12}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <Typography
              component="h1"
              variant="h1"
              ml={'35px'}
              mt={'26px'}
              fontSize={'20px'}
            >
              Casos
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        md={12}
        lg={12}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          height: 'auto',
        }}
      >
        <Grid item md={6} mt={'33px'} ml={'22px'} mb={'16px'}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <GridToolbarQuickFilter />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

function TableDasboard() {
  //variables
  const rows = [
    { id: 1, col1: 'Hello', col2: 'World' },
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
  ];

  const columns = [
    { field: 'col1', headerName: 'Column 1', width: 150 },
    { field: 'col2', headerName: 'Column 2', width: 150 },
  ];

  return (
    <Grid item xs={12} md={12} lg={12}>
      <Box
        component={'div'}
        sx={{
          height: 737,
          mb: '40px',
          width: '100%',
          background: 'pink',
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          disableColumnMenu
          initialState={{
            pagination: { paginationModel: { pageSize: 10 } },
          }}
          pageSizeOptions={[5, 10, 25]}
          slots={{ toolbar: QuickSearchToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
            },
          }}
          style={{
            background: colorsTable.colorFondo,
          }}
        />
      </Box>
    </Grid>
  );
}

export default TableDasboard;
