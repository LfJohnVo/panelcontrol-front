import React from 'react';
import { colorsTable } from '../../common/color/color';
import {
  Grid,
  Typography,
  Box,
  Button,
  Stack,
  IconButton,
} from '@mui/material';
import { DataGrid, GridToolbarQuickFilter } from '@mui/x-data-grid';
import AddIcon from '@mui/icons-material/Add';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Link as linkrouter, useNavigate } from 'react-router-dom';
import Link from '@mui/material/Link';
import Loading from '../loading/Loading';
import { useGetCatalogs } from '../../hooks/catalogs';

const QuickSearchToolbar = () => {
  const navigate = useNavigate();
  return (
    <Box component={'div'}>
      <Grid
        item
        xs={12}
        md={12}
        lg={12}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          height: 'auto',
          background: '#FFFFF',
        }}
      >
        <Grid item md={6}>
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
              Servicios creados
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
          background: '#FFFFF',
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
        <Grid item md={6}>
          <Box
            sx={{
              p: 1,
              pb: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
            }}
          >
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={() => {
                navigate('/catalogoCreate');
              }}
            >
              Crear servicio
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

const TableCatalog = () => {
  const [loading, catalogs, handleGetCatalogs] = useGetCatalogs();
  const navigate = useNavigate();

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 150,
      headerClassName: 'super-app-theme--header2',
      renderCell: cellValues => {
        return (
          <>
            <Link
              component={linkrouter}
              to={`/catalogo/${cellValues.row.id}/details`}
              underline="none"
              sx={{ ml: '30px', textAlign: 'left' }}
            >
              {cellValues.row.id}
            </Link>
          </>
        );
      },
    },
    {
      field: 'title',
      headerName: 'Nombre',
      width: 550,
      headerClassName: 'super-app-theme--header',
    },
    {
      field: 'Opciones',
      headerClassName: 'super-app-theme--header',
      width: 350,
      renderCell: cellValues => {
        return (
          <>
            <Stack direction="row" spacing={0.5}>
              <IconButton
                aria-label="edit"
                onClick={async e => {
                  navigate(`/catalogo/${cellValues.row.id}/edit`);
                }}
              >
                <EditOutlinedIcon />
              </IconButton>
            </Stack>
          </>
        );
      },
    },
  ];

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Grid item xs={12} md={12} lg={12}>
          <Box
            component={'div'}
            sx={{
              height: 737,
              mb: '40px',
              width: '100%',
              '& .super-app-theme--header2': {
                backgroundColor: colorsTable.colorCellHeader,
                pl: '39px',
              },
              '& .super-app-theme--header': {
                backgroundColor: colorsTable.colorCellHeader,
              },
            }}
          >
            <DataGrid
              rows={catalogs}
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
      )}
    </>
  );
};

export default TableCatalog;
